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
    }, 10);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    let minutesPassed = Math.floor(this.currentTime / 6000);
    return minutesPassed;
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let secondsPassed = Math.floor(this.currentTime / 100);
    secondsPassed = secondsPassed % 60;
    return secondsPassed;
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    }

    let centiSecondsPassed = this.currentTime % 100;

    return centiSecondsPassed;
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
    const centiSplit = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutesSplit}:${secondsSplit}.${centiSplit}`;
  }
}
