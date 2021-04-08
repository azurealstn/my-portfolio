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

function scrollIntoSection(event) {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null || link === undefined) return;

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

/**
 * 1. 모든 섹션 요소들을 가져온다.
 * 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
 * 3. 보여지는 섹션에 해당하는 메뉴 버튼의 active를 활성화한다.
 */
//1. 모든 섹션 요소들을 가져온다.
/* const sectionIdList = ['#home', '#about', '#skills', '#work', '#contact'];
const sections = sectionIdList.map(id => document.querySelector(id));
const navItems = sectionIdList.map(id => document.querySelector(`[data-link="${id}"]`));

//2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
let selectedNavItem = navItems[0];
let selectedNavIndex = 0;

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}
const callback = (entries, oberserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIdList.indexOf(`#${entry.target.id}`);
      //스크롤을 내릴 때 섹션이 위로 올라옴. (y좌표가 마이너스가 됨)
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1; //스크롤을 올릴 때 섹션이 아래로 내려감. (전 인덱스 선택)
      }
    }
  });
};
const oberserver = new IntersectionObserver(callback, observerOptions); //관찰자 생성
sections.forEach(section => oberserver.observe(section)); //섹션들을 관찰하기

//3. 보여지는 섹션에 해당하는 메뉴 버튼의 active를 활성화한다.
function selectNavItem(selector) {
  selectedNavItem.classList.remove('active'); //첫번째 아이템 active 클래스를 지운다.
  selectedNavItem = selector;
  selectedNavItem.classList.add('active');
}

window.addEventListener('wheel', () => {
  if (window.screenY === 0) {
    selectedNavIndex = 0;
  } else if (window.screenY + window.innerHeight === document.body.clientHeight) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
}); */