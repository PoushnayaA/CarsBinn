const member_btn = document.querySelector('.main-header__button');
const form = document.querySelector('.form-wrapper');

const scrollWindow = () => {
  form.scrollIntoView();
};
const onBeMemberButtonClick = () => scrollWindow();

member_btn.addEventListener('click', onBeMemberButtonClick);





const header = document.querySelector('.main-header');
const pagination = document.querySelectorAll('.slider-pagination__item');

const PHOTO = [
  'bmw',
  'volvo',
  'mini',
  'infinity'
]

const changePhoto = () => {
  for (let i = 0; true; i++) {
    if (header.classList.contains(`main-header--${PHOTO[i%4]}`)) {
      header.classList.remove(`main-header--${PHOTO[i%4]}`);
      header.classList.add(`main-header--${PHOTO[(i+1)%4]}`);
      pagination[i%4].querySelector('.slider-pagination__button').classList.remove('slider-pagination__button--active');
      pagination[(i+1)%4].querySelector('.slider-pagination__button').classList.add('slider-pagination__button--active');
      return
    }
  };

}

setInterval(changePhoto, 5000);





const language = document.querySelector('.change-language__button');
const lang_buttons = document.querySelector('.change-language__select');

language.addEventListener('click', function () {
  document.querySelector('.change-language__select').classList.toggle('visually-hidden');
  language.classList.toggle('change-language__button--active');
});

lang_buttons.addEventListener('click', function (evt) {
  document.querySelector('.change-language__select').classList.add('visually-hidden');
  document.querySelector('.change-language__item--active').classList.remove('change-language__item--active');
  language.classList.remove('change-language__button--active');
  if (evt.target.matches('.change-language__item')) {
    evt.target.classList.add('change-language__item--active');
    language.textContent = evt.target.textContent;
    language.textContent.style.textTransform = uppercase;
  }
});



