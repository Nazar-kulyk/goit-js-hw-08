import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const feedbackFormState =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = feedbackFormState.email || '';
messageInput.value = feedbackFormState.message || '';

const saveFormState = throttle(() => {
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
}, 500);

form.addEventListener('input', e => {
  saveFormState();
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(currentState);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
