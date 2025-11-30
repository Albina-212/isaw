function validatePhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^8[0-9]{10}$/;
  return phoneNumberRegex.test(phoneNumber);
}

function validateName(name) {
  return /[а-яА-Я]/.test(name);
}

function validateLastname(name) {
  return /[а-яА-Я]/.test(name);
}

function validateRequiredField(field) {
  return field.value !== '';
}


// Получить элементы
const openModalButton1 = document.getElementById('btn1-vseturi');
const openModalButton2 = document.getElementById('btn2-vseturi');
const openModalButton3 = document.getElementById('btn3-vseturi');
const openModalButton4 = document.getElementById('btn4-vseturi');
const openModalButton5 = document.getElementById('btn5-vseturi');
const openModalButton6 = document.getElementById('btn6-vseturi');

const formModal = document.getElementById('form-modal');
const successModal = document.getElementById('success-modal');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');

const superButton = document.getElementById('super-button');
const okButton = document.getElementById('ok-button');
const welcomeNameSpan = document.getElementById('welcome-name');

if (firstNameInput[0].toLowerCase() !== firstNameInput[0] || lastNameInput[0].toLowerCase() !== lastNameInput[0]) {
  alert('Первая буква имени и фамилии должна быть заглавной.');
} else if (firstNameInput.slice(1).toLowerCase() === firstNameInput.slice(1) || lastNameInput.slice(1).toLowerCase() === lastNameInput.slice(1)) {
  alert('Все буквы имени и фамилии, кроме первой, должны быть строчными.');
}

openModalButton1.addEventListener('click', () => {
  formModal.classList.add('active');
});
openModalButton2.addEventListener('click', () => {
  formModal.classList.add('active');
});
openModalButton3.addEventListener('click', () => {
  formModal.classList.add('active');
});
openModalButton4.addEventListener('click', () => {
  formModal.classList.add('active');
});
openModalButton5.addEventListener('click', () => {
  formModal.classList.add('active');
});
openModalButton6.addEventListener('click', () => {
  formModal.classList.add('active');
});


const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const phoneNumberInput = document.getElementById('phone-number');
  const phoneNumber = phoneNumberInput.value;

  const firstNameInput = document.getElementById('first-name');
  const firstName = firstNameInput.value;

  const lastNameInput = document.getElementById('last-name');
  const lastName = lastNameInput.value;
  
  if (!validateRequiredField(firstNameInput)) {
    alert('Введите свое имя.');
    return;
  }

  if (!validateRequiredField(lastNameInput)) {
    alert('Введите свою фамилию.');
    return;
  }

  if (!validateRequiredField(phoneNumberInput)) {
    alert('Введите свой номер телефона.');
    return;
  }
  
  if (!validatePhoneNumber(phoneNumber)) {
    alert('Введите правильный номер телефона.');
    return;
  }
  if (!validateName(firstName)) {
    alert('Введите свое имя.');
    return;
  }
  if (!validateLastName(lastName)) {
    alert('Введите свою фамилию.');
    return;
  }
  if (registrationForm.checkValidity()) {
    alert('всё введено правильно');
  
    successModal.classList.add('active');
    welcomeNameSpan.textContent = `${firstName} ${lastName}`;
  }
});

// Обработчик нажатия кнопки "OK"
okButton.addEventListener('click', () => {
  formModal.classList.remove('active');
  successModal.classList.add('active');
});


// Обработчик закрытия всплывающих окон
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    formModal.classList.remove('active');
    successModal.classList.remove('active');
  }
});

// Обработчик нажатия кнопки "Супер"
superButton.addEventListener('click', () => {
  formModal.classList.remove('active');
  successModal.classList.remove('active');
});


const containers = document.querySelectorAll('.para');

containers.forEach((container) => {
  const image = container.querySelector('img');
  const video = container.querySelector('video');

  image.addEventListener('mouseover', () => {
    video.style.display = 'block';
    image.style.display = 'none';
  });

  video.addEventListener('mouseout', () => {
    video.style.display = 'none';
    image.style.display = 'block';
  });
});