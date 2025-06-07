// Main application initialization and shared functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFeaturedContent();
});

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav__menu--open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('nav__menu--open');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('nav__menu--open');
            });
        });
    }
}

/**
 * Initialize featured content on homepage
 */
function initializeFeaturedContent() {
    loadFeaturedPosts();
    loadFeaturedStories();
}

/**
 * Load and display featured blog posts
 */
function loadFeaturedPosts() {
    const featuredPostsContainer = document.getElementById('featuredPosts');
    if (!featuredPostsContainer) return;
    
    // Wait for BlogManager to be available
    if (!window.BlogManager) {
        setTimeout(loadFeaturedPosts, 100);
        return;
    }
    
    const allPosts = window.BlogManager.getBlogPosts();
    // Sort by date (newest first) and get first 2 posts
    const featuredPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
    
    if (featuredPosts.length === 0) {
        featuredPostsContainer.innerHTML = '<p class="empty-state">No blog posts available.</p>';
        return;
    }
    
    featuredPostsContainer.innerHTML = featuredPosts.map(post => createBlogCard(post)).join('');
    
    // Add click event listeners
    featuredPostsContainer.querySelectorAll('.card').forEach((card, index) => {
        card.addEventListener('click', function() {
            window.location.href = `blog-post.html?id=${featuredPosts[index].id}`;
        });
    });
}

/**
 * Load and display featured stories
 */
function loadFeaturedStories() {
    const featuredStoriesContainer = document.getElementById('featuredStories');
    if (!featuredStoriesContainer) return;
    
    // Wait for BlogManager to be available
    if (!window.BlogManager) {
        setTimeout(loadFeaturedStories, 100);
        return;
    }
    
    const allStories = window.BlogManager.getStories();
    // Sort by date (newest first) and get first 2 stories
    const featuredStories = allStories.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
    
    if (featuredStories.length === 0) {
        featuredStoriesContainer.innerHTML = '<p class="empty-state">No stories available.</p>';
        return;
    }
    
    featuredStoriesContainer.innerHTML = featuredStories.map(story => createStoryCard(story)).join('');
    
    // Add click event listeners
    featuredStoriesContainer.querySelectorAll('.card').forEach((card, index) => {
        card.addEventListener('click', function() {
            window.location.href = `story.html?id=${featuredStories[index].id}`;
        });
    });
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
                <span class="card__category">${post.category}</span>
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
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
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
 * Show loading state
 * @param {HTMLElement} element - Element to show loading state
 */
function showLoading(element) {
    element.innerHTML = '<div class="loading-state">Loading...</div>';
}

/**
 * Show error state
 * @param {HTMLElement} element - Element to show error state
 * @param {string} message - Error message
 */
function showError(element, message) {
    element.innerHTML = `<div class="error-state">Error: ${escapeHtml(message)}</div>`;
}

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector
 */
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
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

// Global error handler
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
});
