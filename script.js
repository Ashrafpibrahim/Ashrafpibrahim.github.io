// Hide loading animation after 2 seconds
setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';
}, 2000);

// Toggle navigation menu on mobile devices
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
// Hide loading animation when page finishes loading
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.loading').style.display = 'none';
});
});
// Create an array of logo sources
