// Contact form validation and submission functionality
(function() {
    'use strict';
    
    let form;
    let submitButton;
    let formMessage;
    let isSubmitting = false;
    
    /**
     * Initialize contact form functionality
     */
    function initializeContactForm() {
        form = document.getElementById('contactForm');
        submitButton = document.getElementById('submitBtn');
        formMessage = document.getElementById('formMessage');
        
        if (!form) return;
        
        setupFormValidation();
        setupFormSubmission();
    }
    
    /**
     * Setup real-time form validation
     */
    function setupFormValidation() {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Validate on blur (when user leaves field)
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Clear errors on input (when user starts typing)
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
    
    /**
     * Setup form submission handling
     */
    function setupFormSubmission() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            handleFormSubmission();
        });
    }
    
    /**
     * Validate individual form field
     * @param {HTMLElement} field - Form field to validate
     * @returns {boolean} Whether field is valid
     */
    function validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Clear previous error
        clearFieldError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${getFieldLabel(field)} is required.`;
        }
        // Email validation
        else if (field.type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
        // Name validation
        else if (fieldName === 'name' && value && value.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters long.';
        }
        // Subject validation
        else if (fieldName === 'subject' && value && value.length < 3) {
            isValid = false;
            errorMessage = 'Subject must be at least 3 characters long.';
        }
        // Message validation
        else if (fieldName === 'message' && value && value.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long.';
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    /**
     * Validate entire form
     * @returns {boolean} Whether form is valid
     */
    function validateForm() {
        const fields = form.querySelectorAll('input[required], textarea[required]');
        let isFormValid = true;
        
        fields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }
    
    /**
     * Handle form submission
     */
    async function handleFormSubmission() {
        if (isSubmitting) return;
        
        // Validate form
        if (!validateForm()) {
            showFormMessage('Please correct the errors above.', 'error');
            return;
        }
        
        isSubmitting = true;
        setSubmitButtonLoading(true);
        hideFormMessage();
        
        try {
            // Collect form data
            const formData = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim(),
                timestamp: new Date().toISOString()
            };
            
            // Simulate form submission (in a real app, this would be an API call)
            await simulateFormSubmission(formData);
            
            // Show success message
            showFormMessage(
                'Thank you for your message! I\'ll get back to you as soon as possible.',
                'success'
            );
            
            // Reset form
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage(
                'Sorry, there was an error sending your message. Please try again later.',
                'error'
            );
        } finally {
            isSubmitting = false;
            setSubmitButtonLoading(false);
        }
    }
    
    /**
     * Simulate form submission with delay
     * @param {Object} formData - Form data to submit
     * @returns {Promise} Promise that resolves after delay
     */
    function simulateFormSubmission(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Log form data (in production, this would be sent to a server)
                console.log('Form submission:', formData);
                
                // Simulate success/failure (95% success rate)
                if (Math.random() > 0.05) {
                    resolve();
                } else {
                    reject(new Error('Simulated submission failure'));
                }
            }, 2000); // 2 second delay to simulate network request
        });
    }
    
    /**
     * Show field-specific error message
     * @param {HTMLElement} field - Form field
     * @param {string} message - Error message
     */
    function showFieldError(field, message) {
        const errorElement = document.getElementById(`${field.name}Error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        field.classList.add('form-input--error');
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', `${field.name}Error`);
    }
    
    /**
     * Clear field-specific error message
     * @param {HTMLElement} field - Form field
     */
    function clearFieldError(field) {
        const errorElement = document.getElementById(`${field.name}Error`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        
        field.classList.remove('form-input--error');
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
    }
    
    /**
     * Show form-level message
     * @param {string} message - Message to display
     * @param {string} type - Message type ('success' or 'error')
     */
    function showFormMessage(message, type) {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = `form-message form-message--${type}`;
        formMessage.style.display = 'block';
        
        // Scroll message into view
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                hideFormMessage();
            }, 5000);
        }
    }
    
    /**
     * Hide form-level message
     */
    function hideFormMessage() {
        if (formMessage) {
            formMessage.style.display = 'none';
        }
    }
    
    /**
     * Set submit button loading state
     * @param {boolean} loading - Whether button should show loading state
     */
    function setSubmitButtonLoading(loading) {
        if (!submitButton) return;
        
        const btnText = submitButton.querySelector('.btn-text');
        const btnLoading = submitButton.querySelector('.btn-loading');
        
        if (loading) {
            submitButton.disabled = true;
            if (btnText) btnText.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'flex';
        } else {
            submitButton.disabled = false;
            if (btnText) btnText.style.display = 'inline';
            if (btnLoading) btnLoading.style.display = 'none';
        }
    }
    
    /**
     * Get field label text
     * @param {HTMLElement} field - Form field
     * @returns {string} Field label
     */
    function getFieldLabel(field) {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label) {
            return label.textContent.replace(' *', '');
        }
        
        // Fallback to field name
        return field.name.charAt(0).toUpperCase() + field.name.slice(1);
    }
    
    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} Whether email is valid
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeContactForm);
    } else {
        initializeContactForm();
    }
    
    // Add error styling to CSS if not present
    const style = document.createElement('style');
    style.textContent = `
        .form-input--error,
        .form-textarea--error {
            border-color: hsl(var(--destructive)) !important;
            box-shadow: 0 0 0 2px hsl(var(--destructive) / 0.2) !important;
        }
        
        .form-error {
            color: hsl(var(--destructive));
            font-size: var(--font-size-sm);
            margin-top: var(--spacing-sm);
            display: none;
        }
        
        .error-state {
            text-align: center;
            padding: var(--spacing-xl);
            color: hsl(var(--muted-foreground));
        }
        
        .error-state h3 {
            color: hsl(var(--destructive));
            margin-bottom: var(--spacing-md);
        }
        
        .loading-state {
            text-align: center;
            padding: var(--spacing-xl);
            color: hsl(var(--muted-foreground));
        }
    `;
    
    // Only add styles if they don't already exist
    if (!document.querySelector('style[data-contact-form-styles]')) {
        style.setAttribute('data-contact-form-styles', '');
        document.head.appendChild(style);
    }
    
})();