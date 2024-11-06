document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a[href^="#"]');
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
});
