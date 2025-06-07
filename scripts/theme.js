// Theme management functionality
(function() {
    'use strict';
    
    const THEME_KEY = 'blog-theme';
    const THEMES = {
        LIGHT: 'light',
        DARK: 'dark'
    };
    
    let currentTheme = getStoredTheme() || getSystemTheme();
    
    /**
     * Initialize theme functionality
     */
    function initializeTheme() {
        applyTheme(currentTheme);
        setupThemeToggle();
        watchSystemTheme();
    }
    
    /**
     * Get stored theme from localStorage
     * @returns {string|null} Stored theme or null
     */
    function getStoredTheme() {
        try {
            return localStorage.getItem(THEME_KEY);
        } catch (error) {
            console.warn('Failed to read theme from localStorage:', error);
            return null;
        }
    }
    
    /**
     * Store theme in localStorage
     * @param {string} theme - Theme to store
     */
    function storeTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            console.warn('Failed to store theme in localStorage:', error);
        }
    }
    
    /**
     * Get system theme preference
     * @returns {string} System theme
     */
    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return THEMES.DARK;
        }
        return THEMES.LIGHT;
    }
    
    /**
     * Apply theme to document
     * @param {string} theme - Theme to apply
     */
    function applyTheme(theme) {
        const validTheme = Object.values(THEMES).includes(theme) ? theme : THEMES.LIGHT;
        
        // Remove existing theme classes
        document.documentElement.removeAttribute('data-theme');
        
        // Apply new theme
        if (validTheme === THEMES.DARK) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        
        currentTheme = validTheme;
        updateThemeIcon(validTheme);
        
        // Dispatch custom event for theme change
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: validTheme }
        }));
    }
    
    /**
     * Toggle between light and dark themes
     */
    function toggleTheme() {
        const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        applyTheme(newTheme);
        storeTheme(newTheme);
    }
    
    /**
     * Update theme toggle button icon
     * @param {string} theme - Current theme
     */
    function updateThemeIcon(theme) {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('.theme-icon');
        if (!icon) return;
        
        if (theme === THEMES.DARK) {
            // Moon icon for dark theme
            icon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            `;
            themeToggle.setAttribute('aria-label', 'Switch to light theme');
        } else {
            // Sun icon for light theme
            icon.innerHTML = `
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            `;
            themeToggle.setAttribute('aria-label', 'Switch to dark theme');
        }
    }
    
    /**
     * Setup theme toggle button event listener
     */
    function setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        themeToggle.addEventListener('click', function(event) {
            event.preventDefault();
            toggleTheme();
        });
        
        // Handle keyboard navigation
        themeToggle.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleTheme();
            }
        });
    }
    
    /**
     * Watch for system theme changes
     */
    function watchSystemTheme() {
        if (!window.matchMedia) return;
        
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleSystemThemeChange = (event) => {
            // Only apply system theme if user hasn't manually set a theme
            const storedTheme = getStoredTheme();
            if (!storedTheme) {
                const systemTheme = event.matches ? THEMES.DARK : THEMES.LIGHT;
                applyTheme(systemTheme);
            }
        };
        
        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleSystemThemeChange);
        }
        // Legacy browsers
        else if (mediaQuery.addListener) {
            mediaQuery.addListener(handleSystemThemeChange);
        }
    }
    
    /**
     * Get current theme
     * @returns {string} Current theme
     */
    function getCurrentTheme() {
        return currentTheme;
    }
    
    /**
     * Set theme programmatically
     * @param {string} theme - Theme to set
     */
    function setTheme(theme) {
        if (Object.values(THEMES).includes(theme)) {
            applyTheme(theme);
            storeTheme(theme);
        } else {
            console.warn('Invalid theme:', theme);
        }
    }
    
    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTheme);
    } else {
        initializeTheme();
    }
    
    // Expose theme API globally
    window.ThemeManager = {
        getCurrentTheme,
        setTheme,
        toggleTheme,
        THEMES
    };
    
    // Handle page visibility changes to sync theme
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            // Page became visible, check if theme should be synced
            const storedTheme = getStoredTheme();
            if (storedTheme && storedTheme !== currentTheme) {
                applyTheme(storedTheme);
            }
        }
    });
    
})();
