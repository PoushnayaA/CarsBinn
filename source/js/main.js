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

  if ((!isValidName(name)) || (!isValidEmail(email)) || (!isValidPhone(phone))) {
    if (!isValidName(name)) {
      nameField.style.borderColor = '#D91F2B';
      if (!connection.querySelector('.message-name')) {
        var elem = document.createElement('div');
        elem.style.color = '#ff0000';
        elem.textContent = 'Имя может содержать только буквы';
        elem.fontSize = '5px'
        elem.classList.add('message-name');
        connection.insertBefore(elem, connection.querySelector('.connection__field-wrapper'));
      }
    } else {
      if (connection.querySelector('.message-name')) {
        connection.querySelector('.message-name').remove();
      }
      nameField.style.borderColor = '#ffffff'
    }

    if (!isValidEmail(email)) {
      emailField.style.borderColor = '#D91F2B';
      if (!connection.querySelector('.message-email')) {
        var elem = document.createElement('div');
        elem.style.color = '#ff0000';
        elem.textContent = 'Укажите почту в формате name@email.reg';
        elem.fontSize = '5px'
        elem.classList.add('message-email');
        connection.insertBefore(elem, connection.querySelector('.connection__field--textarea'));
      }
    } else {
      if (connection.querySelector('.message-email')) {
        connection.querySelector('.message-email').remove();
      }
      emailField.style.borderColor = '#ffffff'
    }

    if (!isValidPhone(phone)) {
      phoneField.style.borderColor = '#D91F2B';
      if (!connection.querySelector('.message-phone')) {
        var elem = document.createElement('div');
        elem.style.color = '#ff0000';
        elem.textContent = 'Телефон может содержать только цифры, а также специальные символы';
        elem.fontSize = '5px'
        elem.classList.add('message-phone');
        connection.insertBefore(elem, connection.querySelector('.connection__field--textarea'));
      }
    } else {
      if (connection.querySelector('.message-phone')) {
        connection.querySelector('.message-phone').remove();
      }
      phoneField.style.borderColor = '#ffffff'
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

function isValidPassword(password) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
  return pattern.test(password);
}
