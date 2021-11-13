'use strict';
let x, hour, min, sec;
setInterval(() => {
  x = new Date();
  hour = x.getHours();
  min = x.getMinutes();
  sec = x.getSeconds();
  let toggle = false;
  if (hour > 12) {
    hour = hour - 12;
    toggle = 1;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (min < 10) {
    min = '0' + min;
  }
  let am = hour + ':' + min + ':' + sec + ' AM';
  let pm = hour + ':' + min + ':' + sec + ' PM';
  if (toggle) {
    document.querySelector('.gettime').textContent = pm;
    // document.getElementById("gettime").innerHTML = pm;
    document.querySelector('.title').textContent = pm;
  } else {
    document.querySelector('.gettime').textContent = am;
    // document.getElementById("gettime").innerHTML = am;
    document.querySelector('.title').textContent = am;
  }
}, 1000);
