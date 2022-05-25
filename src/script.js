'use strict'

class Clock {
  constructor(nodeElem) {
    this.nodeElem = nodeElem;
    this.formatFull = true;
    nodeElem.addEventListener('click', () => {
    this.formatFull = !this.formatFull;
    this.render();
  });
  }
  
  render() {
    let time = '';
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (this.formatFull) {
        time = `${hours}:${minutes}:${seconds}`;
    } else {
        time = `${hours}:${minutes}`;
    }

    this.nodeElem.innerHTML = time;  
  }

  start () {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop () {
    clearInterval(this.timer);
  }

  setFormat (format = 'full') {
    this.formatFull = format === 'short' ? false : true;
  }
}

class Watch extends Clock {
  constructor(nodeElem) {
    super(nodeElem);
  }
  
  render () {
  let time = '';
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
      hours = '0' + hours;
  }
  if (minutes < 10) {
      minutes = '0' + minutes;
  }
  if (seconds < 10) {
      seconds = '0' + seconds;
  }
  if (this.formatFull) {
      time = `${hours}/${minutes}/${seconds}`;
  } else {
      time = `${hours}/${minutes}`;
  }

  this.nodeElem.innerHTML = time;  
 }
}  

class Timing extends Clock {
  constructor(nodeElem) {
    super(nodeElem);
  }

  render() {
    let time = '';
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }  
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (this.formatFull) {
        time = `${hours}-${minutes}-${seconds}`;
    } else {
        time = `${hours}-${minutes}`;
    }
    
    this.nodeElem.innerHTML = time;  
 }
}

const clock = new Clock(document.querySelector('#clock1'));
const clock2 = new Clock(document.querySelector('#clock2'));
clock.start();
clock2.setFormat('short');
clock2.start();

const watch = new Watch(document.querySelector('#clock3'));
const watch2 = new Watch(document.querySelector('#clock4'));
watch.start();
watch2.setFormat('short');
watch2.start();

const timing = new Timing(document.querySelector('#clock5'));
const timing2 = new Timing(document.querySelector('#clock6'));
timing.start();
timing2.setFormat('short');
timing2.start();














