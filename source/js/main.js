//Реализация кнопки "стать клиентом"
const clientBtn = document.querySelector('.main-header__button');
const form = document.querySelector('.form-wrapper');

const scrollWindow = () => {
  form.scrollIntoView();
};
const onBeMemberButtonClick = () => scrollWindow();

clientBtn.addEventListener('click', onBeMemberButtonClick);



//Слайдер
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
    if (header.classList.contains(`main-header--${PHOTO[i % 4]}`)) {
      header.classList.remove(`main-header--${PHOTO[i % 4]}`);
      header.classList.add(`main-header--${PHOTO[(i + 1) % 4]}`);
      pagination[i % 4].querySelector('.slider-pagination__button').classList.remove('slider-pagination__button--active');
      pagination[(i + 1) % 4].querySelector('.slider-pagination__button').classList.add('slider-pagination__button--active');
      return
    }
  };
}

let slide = setInterval(changePhoto, 5000);

header.addEventListener('click', function () {
  changePhoto();
  clearInterval(slide);
  slide = setInterval(changePhoto, 5000);
});



//Активация кнопки смены языка
const language = document.querySelector('.change-language__button');
const langButtons = document.querySelector('.change-language__select');

language.addEventListener('click', function () {
  document.querySelector('.change-language__select').classList.toggle('visually-hidden');
  language.classList.toggle('change-language__button--active');
});

langButtons.addEventListener('click', function (evt) {
  document.querySelector('.change-language__select').classList.add('visually-hidden');
  document.querySelector('.change-language__item--active').classList.remove('change-language__item--active');
  language.classList.remove('change-language__button--active');
  if (evt.target.matches('.change-language__item')) {
    evt.target.classList.add('change-language__item--active');
    language.textContent = evt.target.textContent;
    language.textContent.style.textTransform = uppercase;
  }
});



//Проверка полей формы
const connection = document.querySelector('.connection');
const nameField = connection.querySelector('#name');
const emailField = connection.querySelector('#email');
const phoneField = connection.querySelector('#phone');

connection.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const name = nameField.value;
  const email = emailField.value;
  const phone = phoneField.value;

  emailField.style.borderColor = '#FFFFFF';
  phoneField.style.borderColor = '#FFFFFF';

  if ((!isValidName(name)) || (!isValidEmail(email)) || (!isValidPhone(phone))) {

    if (!isValidEmail(email)) {
      emailField.style.borderColor = '#D91F2B';
    }

    if (!isValidPhone(phone)) {
      phoneField.style.borderColor = '#D91F2B';
    }
    return;
  }

  connection.submit();
});

function isValidName(name) {
  const pattern = /^[a-zA-Zа-яëА-ЯЁ]+$/;
  return pattern.test(name);
}

function isValidEmail(email) {
  const pattern = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
  return pattern.test(email);
}

function isValidPhone(phone) {
  const pattern = /^\+?[78][-\(]?\d{1,}\)?-?\d{1,}-?\d{1,}-?\d{1,}$/;
  return pattern.test(phone);
}



//Маска для телефона
const phoneInput = document.querySelector('.connection__field--phone');
const maskOptions = {
    mask: '+{7}(000)000{-}00{-}00',
    lazy: false
}

const phoneInputHandler = () => {
  const phoneMask = new IMask(phoneInput, maskOptions);
  phoneInput.style.color = "#ffffff";
  if (phoneMask.masked.isComplete) {
    phoneInput.classList.add('connection__field--valid');
  } else {
    phoneInput.classList.remove('connection__field--invalid');
  }
}

phoneInput.addEventListener ('input', phoneInputHandler);



//Запрет на ввод цифр
const noDigits = (event) => {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}



//Счетчик
const time = 2000;
const step = 1;

const outNum = (num, elem) => {
  const counter = document.querySelector(elem);
  let current = 0;
  const timeChange = Math.round(time / (num / step));

  const interval = setInterval(() => {
    current = current + step;
    if (current == 3) {
      clearInterval(interval);

      const intervalB = setInterval(() => {
        current = current + step;
        if (current == num-3) {
          clearInterval(intervalB);

          const intervalC = setInterval(() => {
            current = current + step;
            if (current == num) {
              clearInterval(intervalC);
            }
            counter.innerHTML = current;
          }, timeChange+200);

        }
        counter.innerHTML = current;
      }, timeChange);

    }
    counter.innerHTML = current;
  }, timeChange+100);
};

outNum(45, ".features--projects");
outNum(8, ".features--support");
outNum(20, ".features--experience");
