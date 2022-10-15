const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit');

email.addEventListener('keyup', (e) => {
  const value = e.currentTarget.value;

  if (value === '') {
    submitButton.disabled = true;
    submitButton.style.cssText = 'background-color: #8e6d8f;';
  } else {
    submitButton.disabled = false;
    submitButton.style.cssText = 'background-color: #631465';
  }
});