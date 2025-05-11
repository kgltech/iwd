// script.js
document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const hiddenContent = document.getElementById('more-content');
    
    learnMoreBtn.addEventListener('click', function() {
        if (hiddenContent.classList.contains('show')) {
            hiddenContent.classList.remove('show');
            learnMoreBtn.textContent = 'Learn More';
            
            // Scroll back to top of content section
            const contentContainer = document.querySelector('.content-container');
            contentContainer.scrollIntoView({ behavior: 'smooth' });
        } else {
            hiddenContent.classList.add('show');
            learnMoreBtn.textContent = 'Show Less';
        }
    });
});