// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init({
  transitions: [
   {
      name:'cover',
      to: {
        namespace: ['home', 'knowledge', 'projects', 'about', 'contact']
      },
      leave() {},
      enter() {}
    }
  ]
});

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const navLinks = document.querySelectorAll('.menu-nav__link');

function setActive(target) {
  navItems.forEach(item => item.classList.remove('active'));
  target.classList.add('active')
}

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    navLinks.forEach(item => item.addEventListener('click', toggleMenu));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    navLinks.forEach(item => item.removeEventListener('click', toggleMenu));

    showMenu = false;
  }
}