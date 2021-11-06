import './sass/main.scss';
const refs = {
  mobMenuBtn: document.querySelector('.header__burger'),
  dropMenu: document.querySelector('.header__menu'),
  body: document.querySelector('body'),
};

refs.mobMenuBtn.addEventListener('click', () => {
  refs.mobMenuBtn.classList.toggle('active');
  refs.dropMenu.classList.toggle('active');
  refs.body.classList.toggle('lock');
});
