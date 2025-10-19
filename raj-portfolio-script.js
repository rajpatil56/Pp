/* ========================================
   RAJ PATIL PORTFOLIO - JAVASCRIPT
   Main functionality for portfolio website
   ======================================== */


/* ========================================
   SMOOTH SCROLL FUNCTIONALITY
   ======================================== */

/**
 * Smoothly scrolls to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}


/* ========================================
   PROJECT TABS FUNCTIONALITY
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Get project grids
    const projectGrids = {
        'personal': document.getElementById('personal-projects'),
        'ai': document.getElementById('ai-projects')
    };

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTab = this.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Hide all project grids
            Object.keys(projectGrids).forEach(key => {
                projectGrids[key].classList.remove('active');
            });
            
            // Show selected project grid
            projectGrids[selectedTab].classList.add('active');
        });
    });


    /* ========================================
       SCROLL ANIMATIONS
       ======================================== */

    // Intersection Observer options
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in and slide up animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Apply initial styles and observe sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Show first section (hero) immediately without animation
    if (sections.length > 0) {
        sections[0].style.opacity = '1';
        sections[0].style.transform = 'translateY(0)';
    }


    /* ========================================
       CARD HOVER EFFECTS
       ======================================== */

    // Add subtle tilt effect on card hover (optional enhancement)
    const cards = document.querySelectorAll('.education-card, .skill-card, .professional-card, .project-card, .cert-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });


    /* ========================================
       PERFORMANCE OPTIMIZATION
       ======================================== */

    // Lazy load images if needed (for future enhancements)
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });


    /* ========================================
       CONSOLE MESSAGE
       ======================================== */

    console.log('%c👋 Welcome to Raj Patil\'s Portfolio!', 'color: #60a5fa; font-size: 20px; font-weight: bold;');
    console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #22d3ee; font-size: 14px;');
    console.log('%c💼 Data Science Student | AI & ML Enthusiast', 'color: #34d399; font-size: 14px;');

});


/* ========================================
   EMAIL TOOLTIP ENHANCEMENT (Optional)
   ======================================== */

// You can add additional email tooltip functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
    const emailButton = document.querySelector('.email-button');
    
    if (emailButton) {
        emailButton.addEventListener('click', function(e) {
            // Email link will work by default
            console.log('📧 Opening email client...');
        });
    }
});
