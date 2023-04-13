const errorMsg = document.getElementById('validation');
const formEmailInput = document.querySelector('form input[type="email"]');
const formBtn = document.querySelector('form button[type="submit"]');

function emailValidation(e) {
  e.preventDefault();
  if (formEmailInput.value !== formEmailInput.value.toLowerCase()) {
    errorMsg.textContent = 'Form not submitted. Email should be lower-cased.';
  } else {
    errorMsg.textContent = '';
  }
}

formBtn.addEventListener('click', emailValidation);