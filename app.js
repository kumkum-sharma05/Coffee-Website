const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener('click', () => menuOpenButton.click()
);

// Close menu when any nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('show-mobile-menu');
    });
});