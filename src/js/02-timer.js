import '../css/common.css';
import '../css/02-timer.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(
        selectedDates[0],
        selectedDates[0].getTime()
      );

      if (selectedDates[0].getTime() <= Date.now()) {
          Notiflix.Notify.failure('Please choose a date in the future');
      }
      refs.startBtn.disabled = false;
  },
};

let calendar = flatpickr('#datetime-picker', options);


const timer = {
    intervalId: null,

    start() {
        
        refs.startBtn.disabled = true;
        const startTime = calendar.selectedDates[0].getTime();
        intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const deltaTimeMs = convertMs(deltaTime);
            updateClockface(deltaTimeMs);
            
             if (deltaTime > 0 && deltaTime < 1000) {
               console.log('return');
               clearInterval(intervalId);
             }
            
             console.log('startTime - currentTime', deltaTimeMs);
           
        }, 1000);
    },
};


refs.startBtn.addEventListener('click', () => {
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

function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}