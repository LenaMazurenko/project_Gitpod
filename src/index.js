import './sass/main.scss';
const refs = {
  mobMenuBtn: document.querySelector('.header__burger'),
  headerMenu: document.querySelector('.header__menu'),
  headerList: document.querySelector('.header__list'),
  body: document.querySelector('body'),
  header: document.querySelector('.header'),
};

/*---add/remove class for mobile menu-----*/
refs.mobMenuBtn.addEventListener('click', () => {
  refs.mobMenuBtn.classList.toggle('active');
  refs.headerMenu.classList.toggle('active');
  refs.body.classList.toggle('lock');
});

/*---add/remove class for active link of menu-----*/
refs.headerList.addEventListener('click', e => {
  const targetLink = e.target;
  const activeLink = document.querySelector('.active_link');
  activeLink.classList.remove('active_link');
  targetLink.classList.add('active_link');
});

/* for scroll > 0*/
window.addEventListener('scroll', function (e) {
  let last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > 0) refs.header.classList.add('scroll');
  else refs.header.classList.remove('scroll');
});
