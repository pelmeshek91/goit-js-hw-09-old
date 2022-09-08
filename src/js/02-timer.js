import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const currentTime = Date.now();
let span = document.getElementsByClassName('value');

let timerId = null;
let startTime = Date.now();

btnStart.setAttribute('disabled', 'true');
flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = selectedDates[0];
  },
});

input.addEventListener('input', e => {
  if (new Date(e.target.value) - currentTime >= 0) {
    input.style.border = '1px solid green';
    btnStart.style.color = 'green';
    btnStart.removeAttribute('disabled');
    Notify.success('Наче працює');
  } else {
    input.style.border = '1px solid red';
    btnStart.setAttribute('disabled', 'true');
    btnStart.style.color = 'red';
    Notify.failure('для чого? + нащо?');
  }
});

const timer = {
  start() {
    timerId = setInterval(() => {
      const currentTime = Date.now();
      if (startTime - currentTime < 0) {
        console.log(startTime);
        this.stop();
      } else {
        const deltaTime = startTime - currentTime;
        const runTime = convertMs(deltaTime);
        for (let i = 0; i < span.length; i += 1) {
          span[i].style.color = 'red';
        }
        for (let key in runTime) {
          document.querySelector(`[data-${key}]`).innerHTML = runTime[key];
        }
      }
    }, 1000);
  },
  stop() {
    clearInterval(timerId);
  },
};
btnStart.addEventListener('click', event => {
  event.preventDefault();
  timer.start();
});
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

input.style.border = '1px solid rgba(255,255,255,.3)';
input.style.borderRadius = '4px';

btnStart.style.border = 'none';
btnStart.style.border = '1px solid rgba(255,255,255,.3)';
btnStart.style.borderRadius = '4px';
