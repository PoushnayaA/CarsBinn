const member_btn = document.querySelector('.main-header__button');
const form = document.querySelector('.form-wrapper');
const scrollWindow = () => {
  form.scrollIntoView();
};
const onBeMemberButtonClick = () => scrollWindow();
member_btn.addEventListener('click', onBeMemberButtonClick);

const header = document.querySelector('.main-header');
const pagination = document.querySelectorAll('.slider-pagination__item');
console.log(pagination[0]);

const changePhoto = () => {
  if (header.classList.contains('main-header--bmw')) {
    header.classList.remove('main-header--bmw');
    header.classList.add('main-header--volvo');
    pagination[0].querySelector('.slider-pagination__button').classList.remove('slider-pagination__button--active');
    pagination[1].querySelector('.slider-pagination__button').classList.add('slider-pagination__button--active');
  } else if (header.classList.contains('main-header--volvo')) {
    header.classList.remove('main-header--volvo');
    header.classList.add('main-header--mini');
    pagination[1].querySelector('.slider-pagination__button').classList.remove('slider-pagination__button--active');
    pagination[2].querySelector('.slider-pagination__button').classList.add('slider-pagination__button--active');
  } else if (header.classList.contains('main-header--mini')) {
    header.classList.remove('main-header--mini');
    header.classList.add('main-header--infinity');
    pagination[2].querySelector('.slider-pagination__button').classList.remove('slider-pagination__button--active');
    pagination[3].querySelector('.slider-pagination__button').classList.add('slider-pagination__button--active');
  } else if (header.classList.contains('main-header--infinity')) {
    header.classList.remove('main-header--infinity');
    header.classList.add('main-header--bmw');
    pagination[3].querySelector('.slider-pagination__button').classList.remove('slider-pagination__button--active');
    pagination[0].querySelector('.slider-pagination__button').classList.add('slider-pagination__button--active');
  }
  return
}

setInterval(changePhoto, 5000);


// const SLIDER_PHOTOS = {
//   0: 'url("../../img/bg-infinity2x.webp")',
//   1: 'url("../../img/bg-infinity2x.webp")',
//   2: 'url("../../img/bg-infinity2x.webp")',
//   3: 'url("../../img/bg-infinity2x.webp")'
// };

// const pagination = document.querySelectorAll('.slider-pagination__item');
// const header = document.querySelector('.main-header');

// const onPaginationButtonClick = (index) => {
//   header.style.backgroundImage = SLIDER_PHOTOS.index;
//   console.log(index);
//   console.log(header.style.backgroundImage);
// };

// for (let i=0; i < pagination.length; i++) {
//   pagination[i].addEventListener('click', onPaginationButtonClick(i))
// };
