import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const newBody = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const daysData = document.querySelector('[data-days]');
const hoursData = document.querySelector('[data-hours]');
const minutesData = document.querySelector('[data-minutes]');
const secondsData = document.querySelector('[data-seconds]');
const dateTimePicker = document.querySelector('#datetime-picker');

let timer = null;
let flatpickrInstance = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose:selectedDates => {
 if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
    }
  }
  };

flatpickrInstance = flatpickr('#datetime-picker', options);
buttonStart.disabled = true;

function timeUnits(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function counter() {
  const selectedDate = flatpickrInstance.selectedDates[0];
  const currentDate = new Date();
  const timeDifference = selectedDate - currentDate;
  buttonStart.disabled = true;
  dateTimePicker.disabled = true;

  if (timeDifference < 0) {
    clearInterval(timer);
    buttonStart.disabled = false;
    dateTimePicker.disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = timeUnits(timeDifference);

  daysData.textContent = addLeadingZero(days);
  hoursData.textContent = addLeadingZero(hours);
  minutesData.textContent = addLeadingZero(minutes);
  secondsData.textContent = addLeadingZero(seconds);
}

buttonStart.addEventListener('click', () => {
  const newDates = flatpickrInstance.selectedDates;
  counter(newDates[0]);
  timer = setInterval(counter, 1000);
});