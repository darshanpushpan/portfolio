document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a[href^="#"]');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    // Smooth scrolling and background color effect on click
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.style.transition = 'background-color 0.3s ease-in-out';
                targetElement.style.backgroundColor = 'none';

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                setTimeout(() => {
                    targetElement.style.backgroundColor = '';
                }, 300);
            } else {
                console.error("Target element not found for ID:", targetId);
            }
        });
    });

    // Toggle the mobile menu
    mobileMenuToggle.addEventListener('click', toggleMenu);

    function toggleMenu() {
        mobileNav.classList.toggle('show');

        // Optional: Show an overlay when the menu is open
        if (mobileNav.classList.contains('show')) {
            document.body.insertAdjacentHTML(
                'beforeend',
                '<div class="overlay" onclick="toggleMenu()"></div>'
            );
        } else {
            const overlay = document.querySelector('.overlay');
            if (overlay) overlay.remove();
        }
    }
});
