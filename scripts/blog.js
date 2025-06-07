// Blog management and content functionality
(function() {
    'use strict';
    
    // This is a test data, should be replaced with real data. I need yekyll or something like that
    const BLOG_POSTS = [
        {
            id: '1',
            title: 'Getting Started with Test 1',
            excerpt: 'A first test for blog',
            content: `
                <p>Here is my first of fucking blog</p>
            `,
            category: 'lifestyle',
            date: '2025-06-07',
            author: 'THD von Alexander'
        },
        {
            id: '2',
            title: 'Test 2',
            excerpt: 'Test 2',
            content: `
                <h2>Fucking test 2</h2>
                <p>Here is fucking content for test 2</p>
            `,
            category: 'tutorial',
            date: '2025-06-07',
            author: 'THD von Alexander'
        }
    ];
    
    // Sample stories data
    const STORIES = [
        {
            id: '1',
            title: 'Journey of a Lodger Chapter 1',
            excerpt: 'Chapter 1: The Beginning, Leaving a Comfortable Borrowed Life Behind, I Sought Freedom in a Three-Step Room',
            content: `
                <h2>Chapter 1: The Beginning, Leaving a Comfortable Borrowed Life Behind, I Sought Freedom in a Three-Step Room</h2>
                <p>First of all, I start in a big city, bla bla haven't thought of the content yet :))</p>
            `,
            date: '2025-07-06',
            author: 'THD von Alexander'
        }
    ];
    
    let allPosts = [];
    let filteredPosts = [];
    let currentCategory = 'all';
    let currentSearchTerm = '';
    
    /**
     * Initialize blog functionality
     */
    function initializeBlog() {
        allPosts = [...BLOG_POSTS];
        filteredPosts = [...allPosts];
        
        setupEventListeners();
        loadBlogContent();
        loadPostContent();
        loadStoryContent();
    }
    
    /**
     * Setup event listeners for blog interactions
     */
    function setupEventListeners() {
        // Category filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                handleCategoryFilter(this.dataset.category);
            });
        });
        
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(handleSearch, 300));
        }
    }
    
    /**
     * Handle category filtering
     * @param {string} category - Category to filter by
     */
    function handleCategoryFilter(category) {
        currentCategory = category;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('filter-btn--active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('filter-btn--active');
        
        filterAndDisplayPosts();
    }
    
    /**
     * Handle search functionality
     * @param {Event} event - Input event
     */
    function handleSearch(event) {
        currentSearchTerm = event.target.value.toLowerCase().trim();
        filterAndDisplayPosts();
    }
    
    /**
     * Filter posts based on current category and search term
     */
    function filterAndDisplayPosts() {
        filteredPosts = allPosts.filter(post => {
            const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
            const matchesSearch = currentSearchTerm === '' || 
                post.title.toLowerCase().includes(currentSearchTerm) ||
                post.excerpt.toLowerCase().includes(currentSearchTerm) ||
                post.content.toLowerCase().includes(currentSearchTerm);
            
            return matchesCategory && matchesSearch;
        });
        
        displayBlogPosts();
    }
    
    /**
     * Display blog posts in the grid
     */
    function displayBlogPosts() {
        const blogGrid = document.getElementById('blogGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!blogGrid) return;
        
        // Sort filtered posts by date (newest first)
        const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        if (sortedPosts.length === 0) {
            blogGrid.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        blogGrid.style.display = 'grid';
        
        blogGrid.innerHTML = sortedPosts.map(post => createBlogCard(post)).join('');
        
        // Add click event listeners
        blogGrid.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('click', function() {
                window.location.href = `blog-post.html?id=${sortedPosts[index].id}`;
            });
        });
    }
    
    /**
     * Load blog listing page content
     */
    function loadBlogContent() {
        if (document.getElementById('blogGrid')) {
            displayBlogPosts();
        }
        
        // Load stories if on stories page
        if (document.getElementById('storiesGrid')) {
            displayStories();
        }
    }
    
    /**
     * Display stories in the grid
     */
    function displayStories() {
        const storiesGrid = document.getElementById('storiesGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!storiesGrid) return;
        
        if (STORIES.length === 0) {
            storiesGrid.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        storiesGrid.style.display = 'grid';
        
        storiesGrid.innerHTML = STORIES.map(story => createStoryCard(story)).join('');
        
        // Add click event listeners
        storiesGrid.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('click', function() {
                window.location.href = `story.html?id=${STORIES[index].id}`;
            });
        });
    }
    
    /**
     * Load individual blog post content
     */
    function loadPostContent() {
        if (!window.location.pathname.includes('blog-post.html')) return;
        
        const postId = getUrlParameter('id');
        if (!postId) {
            showPostError('No post ID provided');
            return;
        }
        
        const post = BLOG_POSTS.find(p => p.id === postId);
        if (!post) {
            showPostError('Post not found');
            return;
        }
        
        displayPost(post);
    }
    
    /**
     * Load individual story content
     */
    function loadStoryContent() {
        if (!window.location.pathname.includes('story.html')) return;
        
        const storyId = getUrlParameter('id');
        if (!storyId) {
            showStoryError('No story ID provided');
            return;
        }
        
        const story = STORIES.find(s => s.id === storyId);
        if (!story) {
            showStoryError('Story not found');
            return;
        }
        
        displayStory(story);
    }
    
    /**
     * Display individual blog post
     * @param {Object} post - Blog post object
     */
    function displayPost(post) {
        // Update page title and meta
        document.title = `${post.title} - Personal Blog & Portfolio`;
        const metaDescription = document.getElementById('postDescription');
        if (metaDescription) {
            metaDescription.setAttribute('content', post.excerpt);
        }
        
        // Update content elements
        const elements = {
            postTitleDisplay: post.title,
            breadcrumbTitle: post.title,
            postTitle: post.title,
            postDate: formatDate(post.date),
            postCategory: post.category,
            postReadTime: `${calculateReadTime(post.content)} min read`,
            postContent: post.content
        };
        
        Object.entries(elements).forEach(([id, content]) => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'postContent') {
                    element.innerHTML = content;
                } else {
                    element.textContent = content;
                }
            }
        });
    }
    
    /**
     * Display individual story
     * @param {Object} story - Story object
     */
    function displayStory(story) {
        // Update page title and meta
        document.title = `${story.title} - Personal Blog & Portfolio`;
        const metaDescription = document.getElementById('storyDescription');
        if (metaDescription) {
            metaDescription.setAttribute('content', story.excerpt);
        }
        
        // Update content elements
        const elements = {
            storyTitleDisplay: story.title,
            breadcrumbTitle: story.title,
            storyTitle: story.title,
            storyDate: formatDate(story.date),
            storyReadTime: `${calculateReadTime(story.content)} min read`,
            storyContent: story.content
        };
        
        Object.entries(elements).forEach(([id, content]) => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'storyContent') {
                    element.innerHTML = content;
                } else {
                    element.textContent = content;
                }
            }
        });
    }
    
    /**
     * Show error for blog post
     * @param {string} message - Error message
     */
    function showPostError(message) {
        const contentElement = document.getElementById('postContent');
        if (contentElement) {
            contentElement.innerHTML = `
                <div class="error-state">
                    <h3>Error Loading Post</h3>
                    <p>${escapeHtml(message)}</p>
                    <a href="blog.html" class="btn btn--primary">Back to Blog</a>
                </div>
            `;
        }
    }
    
    /**
     * Show error for story
     * @param {string} message - Error message
     */
    function showStoryError(message) {
        const contentElement = document.getElementById('storyContent');
        if (contentElement) {
            contentElement.innerHTML = `
                <div class="error-state">
                    <h3>Error Loading Story</h3>
                    <p>${escapeHtml(message)}</p>
                    <a href="stories.html" class="btn btn--primary">Back to Stories</a>
                </div>
            `;
        }
    }
    
    /**
     * Create HTML for a blog post card
     * @param {Object} post - Blog post object
     * @returns {string} HTML string
     */
    function createBlogCard(post) {
        return `
            <article class="card">
                <div class="card__meta">
                    <span class="card__category">${escapeHtml(post.category)}</span>
                    <time class="card__date">${formatDate(post.date)}</time>
                    <span class="card__read-time">${calculateReadTime(post.content)} min read</span>
                </div>
                <h3 class="card__title">${escapeHtml(post.title)}</h3>
                <p class="card__excerpt">${escapeHtml(post.excerpt)}</p>
            </article>
        `;
    }
    
    /**
     * Create HTML for a story card
     * @param {Object} story - Story object
     * @returns {string} HTML string
     */
    function createStoryCard(story) {
        return `
            <article class="card">
                <div class="card__meta">
                    <time class="card__date">${formatDate(story.date)}</time>
                    <span class="card__read-time">${calculateReadTime(story.content)} min read</span>
                </div>
                <h3 class="card__title">${escapeHtml(story.title)}</h3>
                <p class="card__excerpt">${escapeHtml(story.excerpt)}</p>
            </article>
        `;
    }
    
    // Utility functions (shared with main.js but redefined for independence)
    
    /**
     * Format date for display
     * @param {string} dateString - ISO date string
     * @returns {string} Formatted date
     */
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    /**
     * Calculate estimated reading time
     * @param {string} content - Content text
     * @returns {number} Reading time in minutes
     */
    function calculateReadTime(content) {
        const wordsPerMinute = 200;
        const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
        const wordCount = text.split(/\s+/).length;
        return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    }
    
    /**
     * Escape HTML to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    /**
     * Get URL parameters
     * @param {string} param - Parameter name
     * @returns {string|null} Parameter value
     */
    function getUrlParameter(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    
    /**
     * Debounce function to limit function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Public API for main.js integration
    window.BlogManager = {
        getBlogPosts: () => [...BLOG_POSTS],
        getStories: () => [...STORIES],
        getPostById: (id) => BLOG_POSTS.find(post => post.id === id),
        getStoryById: (id) => STORIES.find(story => story.id === id)
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBlog);
    } else {
        initializeBlog();
    }
    
})();

// Export functions for main.js
function getBlogPosts() {
    return window.BlogManager ? window.BlogManager.getBlogPosts() : [];
}

function getStories() {
    return window.BlogManager ? window.BlogManager.getStories() : [];
}
