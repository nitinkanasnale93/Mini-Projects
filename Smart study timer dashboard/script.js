const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const timerDisplay = document.getElementById("timer");

const studyTimer = {
  minutes: 25,
  seconds: 0,
  time: null,

  start: function () {
    if (this.time !== null) {
      alert("Timer is already running!");
      return;
    }

    this.time = setInterval(() => {
      this.updateTimer();
    }, 1000);
  },

  updateTimer: function () {
    if (this.seconds === 0) {
      if (this.minutes === 0) {
        this.stop();
        alert("⏳ Time's up! Take a break.");
        return;
      }

      this.minutes--;
      this.seconds = 59;
    } else {
      this.seconds--;
    }

    this.displayTime();
  },

  displayTime: function () {
    let min = String(this.minutes).padStart(2, "0");
    let sec = String(this.seconds).padStart(2, "0");

    timerDisplay.innerText = `${min}:${sec}`;
  },

  stop: function () {
    if (this.time === null) {
      alert("Timer is not running!");
      return;
    }

    clearInterval(this.time);
    this.time = null;
  }
};

startBtn.addEventListener("click", function () {
  studyTimer.start();
});

stopBtn.addEventListener("click", function () {
  studyTimer.stop();
});
