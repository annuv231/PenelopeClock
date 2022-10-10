'use strict';
let x, hour, min, sec, date, month, weekdays;
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
setInterval(() => {
  x = new Date();
  hour = x.getHours();
  min = x.getMinutes();
  sec = x.getSeconds();
  date = x.getDate();
  month = x.getMonth();
  weekdays = x.getDay();
  weekdays = days[weekdays];
  month = monthNames[month];
  date = date + ' ' + month + ',' + weekdays;
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
  document.querySelector('.date').textContent = date;
}, 1000);

const setBg = () => {
  const randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  var r = document.querySelector(':root');
  // document.body.style.backgroundColor = '#' + randomColor1;
  console.log('clicked', randomColor1, randomColor2);
  r.style.setProperty('--primary-color', randomColor1);
  r.style.setProperty('--secondary-color', randomColor2);
};
const genNew = document.querySelector('.btn');
genNew.addEventListener('click', e => {
  console.log('u clicked me');
});
genNew.addEventListener('click', setBg);
