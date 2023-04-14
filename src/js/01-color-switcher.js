import '../css/common.css';

const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
};

let timerId = null;


refs.startBtn.addEventListener('click', changeBodyColor);
refs.stopBtn.addEventListener('click', stopBodyColor);

function changeBodyColor() {
    
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
       refs.body.style.backgroundColor = getRandomHexColor();
        console.log('change');
    }, 1000);
}

function stopBodyColor() {
    refs.startBtn.disabled = false;
    clearInterval(timerId);
    timerId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}