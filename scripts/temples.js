const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Toggle the symbol between hamburger and X
    hamburger.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
});