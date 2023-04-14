import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  clockFace: document.querySelector('.js-clockface')
};

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if (this.isActive) {
            return;
        }

        const startTime = Date.now();
        console.log(`ld`, startTime);
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    getTimeComponents(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = this.pad(Math.floor(totalSeconds / 3600));
  const mins = this.pad(Math.floor((totalSeconds % 3600) / 60));
  const secs = this.pad(totalSeconds % 60);
  return { hours, mins, secs };
    }
    
    pad(value) {
    return String(value).padStart(2, '0');
}
}

const timer = new Timer({
    onTick: updateClockface
});


refs.startBtn.addEventListener('click', timer.start.bind(timer));


refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, mins, secs }) {
    refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}





