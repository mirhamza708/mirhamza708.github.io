// <!-- =========================================================
// js/main.js
// Shared JavaScript
// ========================================================= -->

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
