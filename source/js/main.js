//Реализация кнопки "стать клиентом"
const clientBtn = document.querySelector('.main-header__button');
const form = document.querySelector('.form-wrapper');

const scrollWindow = () => {
  form.scrollIntoView();
};
const onBeMemberButtonClick = () => scrollWindow();

clientBtn.addEventListener('click', onBeMemberButtonClick);



//Слайдер

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 4000,
   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
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
  }
});


const showMessage = (field) => {
  const alertElement = document.createElement('div');
  if (field === 'email') {
    alertElement.textContent = 'Ваш email является некорректным';
  } else if (field === 'name') {
    alertElement.textContent = 'Это поле является обязательным';
  } else if (field === 'phone') {
    alertElement.textContent = 'Заполните поле полностью';
  }
  alertElement.classList.add('message');
  document.querySelector(`.connection__container--${field}`).append(alertElement);
}



//Проверка полей формы
const connection = document.querySelector('.connection');
const nameField = connection.querySelector('#name');
const emailField = connection.querySelector('#email');
const phoneField = connection.querySelector('#phone');

const blurInputEmail = () => {
  if (!isValidEmail(emailField.value)) {
    emailField.style.borderColor = '#D91F2B';
    showMessage('email');
    emailField.removeEventListener('blur', blurInputEmail);
    return
  }
  if (isValidEmail(emailField.value)) {
    emailField.removeEventListener('blur', blurInputEmail);
    return
  }
};

emailField.addEventListener('focus', () => {
  emailField.addEventListener('blur', blurInputEmail);
  emailField.style.borderColor = '#FFFFFF';
  document.querySelector('.connection__container--email').querySelector('.message').remove();
})

const blurInputPhone = () => {
  if (!isValidPhone(phoneField.value)) {
    phoneField.style.borderColor = '#D91F2B';
    showMessage('phone');
    phoneField.removeEventListener('blur', blurInputPhone);
    return
  }
  if (isValidPhone(phoneField.value)) {
    phoneField.removeEventListener('blur', blurInputPhone);
    return
  }
};

phoneField.addEventListener('focus', () => {
  phoneField.addEventListener('blur', blurInputPhone);
  phoneField.style.borderColor = '#FFFFFF';
  document.querySelector('.connection__container--phone').querySelector('.message').remove();
})

const blurInputName = () => {
  if (!isValidName(nameField.value)) {
    nameField.style.borderColor = '#D91F2B';
    showMessage('name');
    nameField.removeEventListener('blur', blurInputName);
    return
  }
  if (isValidName(nameField.value)) {
    nameField.removeEventListener('blur', blurInputName);
    return
  }
};

nameField.addEventListener('focus', () => {
  nameField.addEventListener('blur', blurInputName);
  nameField.style.borderColor = '#FFFFFF';
  document.querySelector('.connection__container--name').querySelector('.message').remove();
})

function isValidName(phone) {
  return phone.length > 0;
}

function isValidPhone(phone) {
  return phone.length === 18;
}

function isValidEmail(email) {
  const pattern = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
  return pattern.test(email);
}



// Ввод телефона
document.addEventListener("DOMContentLoaded", function () {
  var phoneInputs = document.querySelectorAll('.connection__field--phone');

  var getInputNumbersValue = function (input) {
      // Return stripped input value — just numbers
      return input.value.replace(/\D/g, '');
  }

  var onPhonePaste = function (e) {
      var input = e.target,
          inputNumbersValue = getInputNumbersValue(input);
      var pasted = e.clipboardData || window.clipboardData;
      if (pasted) {
          var pastedText = pasted.getData('Text');
          if (/\D/g.test(pastedText)) {
              // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
              // formatting will be in onPhoneInput handler
              input.value = inputNumbersValue;
              return;
          }
      }
  }

  var onPhoneInput = function (e) {
      var input = e.target,
          inputNumbersValue = getInputNumbersValue(input),
          selectionStart = input.selectionStart,
          formattedInputValue = "";

      if (!inputNumbersValue) {
          return input.value = "";
      }

      if (input.value.length != selectionStart) {
          // Editing in the middle of input, not last symbol
          if (e.data && /\D/g.test(e.data)) {
              // Attempt to input non-numeric symbol
              input.value = inputNumbersValue;
          }
          return;
      }

      if ((inputNumbersValue[0]) > -1) {
          if ((inputNumbersValue[0] !== "7")&&(inputNumbersValue[0] !== "8")) inputNumbersValue = "7" + inputNumbersValue;
          if (inputNumbersValue.length === 10 && inputNumbersValue[0] === "8") inputNumbersValue = "7" + inputNumbersValue;
          var firstSymbols = (inputNumbersValue.length === 11 && inputNumbersValue[0] === "8") ? "+7" : "+7";
          formattedInputValue = input.value = firstSymbols + " ";
          if (inputNumbersValue.length > 1) {
              formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
          }
          if (inputNumbersValue.length >= 5) {
              formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
          }
          if (inputNumbersValue.length >= 8) {
              formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
          }
          if (inputNumbersValue.length >= 10) {
              formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
          }
        }
      input.value = formattedInputValue;
  }
  var onPhoneKeyDown = function (e) {
      // Clear input after remove last symbol
      var inputValue = e.target.value.replace(/\D/g, '');
      if (e.keyCode === 8 && inputValue.length === 1) {
          e.target.value = "";
      }
  }
  for (var phoneInput of phoneInputs) {
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('input', onPhoneInput, false);
      phoneInput.addEventListener('paste', onPhonePaste, false);
  }
})





//Запрет на ввод цифр
const noDigits = (event) => {
  if(!/[a-z\s]|[а-я\s]/ig.test(event.key))
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
    if (current === 3) {
      clearInterval(interval);

      const intervalB = setInterval(() => {
        current = current + step;
        if (current === num-3) {
          clearInterval(intervalB);

          const intervalC = setInterval(() => {
            current = current + step;
            if (current === num) {
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

// document.querySelector('.js-contact-block').style.display = 'none';

document.querySelector('.form-wrapper__open-popup').addEventListener('click', function (evt) {
  evt.preventDefault();
  document.querySelector('.agreement-window').style.display = 'block';
});

document.querySelector('.agreement-window__close').addEventListener('click', function (evt) {
  evt.preventDefault();
  document.querySelector('.agreement-window').style.display = 'none';
});
