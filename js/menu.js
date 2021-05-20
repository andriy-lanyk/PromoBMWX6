const burgerButton = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');

burgerButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('menu-active');
    burgerButton.classList.toggle('humburger-menu-active');
};

menu.addEventListener('click', closeMenu);

function closeMenu(e) {
    if (e.target.hasAttribute('href')) {
        toggleMenu();
    }
}