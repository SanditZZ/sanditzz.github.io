// navbar background when not at the top
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav_black');
    } else {
        nav.classList.remove('nav_black');
    }
});