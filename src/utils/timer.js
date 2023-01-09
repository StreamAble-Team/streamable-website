export class Timer {
  callbackStartTime;
  remaining = 0;
  paused = false;
  timerId = null;
  _callback;
  _delay;

  constructor(callback, delay) {
    this._callback = callback;
    this._delay = delay;
  }

  pause() {
    if (!this.paused) {
      this.clear();
      this.remaining = new Date().getTime() - this.callbackStartTime;
      this.paused = true;
    }
  }

  resume() {
    if (this.paused) {
      if (this.remaining) {
        setTimeout(() => {
          this.run();
          this.paused = false;
          this.start();
        }, this.remaining);
      } else {
        this.paused = false;
        this.start();
      }
    }
  }

  clear() {
    clearInterval(this.timerId);
  }

  start() {
    this.clear();
    this.timerId = setInterval(() => {
      this.run();
    }, this._delay);
  }

  run() {
    this.callbackStartTime = new Date().getTime();
    this._callback();
  }
}
