'use strict';

//스크롤이 움직일 때 navbar를 투명하게
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});


const menu = document.querySelector('.navbar__menu');
menu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null || undefined) return;

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});