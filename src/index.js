import './sass/main.scss';

/*------------------------------*/
const refs = {
  mobMenuBtn: document.querySelector('.header__burger'),
  headerMenu: document.querySelector('.header__menu'),
  headerList: document.querySelector('.header__list'),
  body: document.querySelector('body'),
  header: document.querySelector('.header'),

  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),

  modalLogin: document.querySelector('.modal-login'),
  linkToSignup: document.getElementById('to_signup'),
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

/*----------open modal LogIN------------*/

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.modalLogin.querySelector('.modal-login__form').classList.add('active');
  refs.modalLogin.querySelector('.modal-signup__form').classList.remove('active');
}
refs.linkToSignup.addEventListener('click', () => {
  refs.modalLogin.querySelector('.modal-login__form').classList.remove('active');
  refs.modalLogin.querySelector('.modal-signup__form').classList.add('active');
});
