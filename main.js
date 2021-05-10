'use strict';

//스크롤이 움직일 때 navbar를 투명하게
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  menu.classList.remove('on');
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

//메뉴 버튼을 클릭했을 때 해당 섹션으로 이동
const menu = document.querySelector('.navbar__menu');
menu.addEventListener('click', (event) => {
  scrollIntoSection(event);
  const active = document.querySelector('.navbar__menu li.active');
  active.classList.remove('active');
  event.target.classList.add('active');
});

function scrollIntoSection(event) {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null || link === undefined) return;

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

//CONTACT ME 버튼을 클릭했을 때 Contact 섹션으로 이동
const homeBtn = document.querySelector('.home__button');
homeBtn.addEventListener('click', (event) => {
  scrollIntoSection(event);
});

//버튼 클릭시 스크롤 Up!
const arrowUp = document.querySelector('.arrow-up');
arrowUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
document.addEventListener('scroll', () => {
  arrowUp.style.opacity = "1";
  arrowUp.style.pointerEvents = "auto";
  if (window.scrollY === 0) {
    arrowUp.style.opacity = "0";
    arrowUp.style.pointerEvents = "none";
  }
})

//프로젝트 필터링
const workCategory = document.querySelector('.work__categories');
const workProject = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workCategory.addEventListener('click', (event) => {
  const key = event.target.dataset.key || event.target.parentNode.dataset.key;
  if (key === null || key === undefined) return;
  /* console.log(key); */

  //선택된 버튼의 active를 없애고 다음 클릭된 버튼에게 active로 선택
  const active = document.querySelector('.category__btn.active');
  active.classList.remove('active');
  const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  target.classList.add('active');

  workProject.classList.add('animate-on');

  setTimeout(() => {
    projects.forEach(project => {
      const value = project.dataset.value;
      if (key === '*' || key === value) project.classList.remove('invisible');
      else project.classList.add('invisible');
    });
    workProject.classList.remove('animate-on');
  }, 300);
});

// Navbar toggle 버튼
const toggleBtn = document.querySelector('.navbar__toggleBtn');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('on');
});


