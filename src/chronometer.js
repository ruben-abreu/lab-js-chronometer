class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    let minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let secondsPassed = this.currentTime % 60;
    return secondsPassed;
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return `0${value}`;
    } else if (value > 9) {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutesSplit = this.computeTwoDigitNumber(this.getMinutes());
    const secondsSplit = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutesSplit}:${secondsSplit}`;
  }
}
