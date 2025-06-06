const nav = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
