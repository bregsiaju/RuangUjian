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

// submitButton.disabled = true;
// submitButton.style.cssText = 'width: 100%; background-color: #8e6d8f; color: #fff; padding: 6px 12px; border-radius: 8px; border: none;';

// email.addEventListener('keyup', (e) => {
//   if (email.value.length > 0) {
//     password.addEventListener('keyup', (p) => {
//       if (password.value !== '') {
//         submitButton.disabled = false;
//         submitButton.style.cssText = 'width: 100%; background-color: #631465; color: #fff; padding: 6px 12px; border-radius: 8px; border: none;';
//       } else {
//         button.disabled = true;
//         submitButton.style.cssText = 'width: 100%; background-color: #8e6d8f; color: #fff; padding: 6px 12px; border-radius: 8px; border: none;';
//       }
//     });
//   }
// });

