document.addEventListener('DOMContentLoaded', () => {
    let menuToggle = document.getElementById('menu-toggle');
    let menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});