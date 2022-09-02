import * as throttle from 'lodash.throttle';

const form = document.querySelector('form');
const SAVED_KEY = 'feedback-form-state';
const formValue = JSON.parse(localStorage.getItem(SAVED_KEY)) || {};

form.addEventListener('input', throttle(onGetData, 500));
form.addEventListener('submit', sendForm);

function onGetData(event) {
  const { name, value } = event.target;
  formValue[name] = value; /* запитати у Руслана */
  localStorage.setItem(SAVED_KEY, JSON.stringify(formValue));
}

function saveMessage() {
  const { email, message } = form.elements;
  email.value = formValue.email || '';
  message.value = formValue.message || '';
}
saveMessage();

function sendForm(event) {
  event.preventDefault();
  console.log(formValue);
  event.target.reset(); /* запитати у Руслана про currentTarget/target */
  localStorage.removeItem(SAVED_KEY);
}
