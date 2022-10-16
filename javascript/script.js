'use strict';
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const ampm = document.querySelector('.ampm');
const date = document.querySelector('.dates');
const weekday = document.querySelector('.weekdays');

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
function updateDate() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let dt = new Date().getDate();
  let mn = new Date().getMonth();
  let day = new Date().getDay();
  // console.log(hr, min, sec, dt, mn, day);
  // console.log();
  let ampmt = 'AM';
  if (hr > 12) {
    hr = hr - 12;
    ampmt = 'PM';
  }
  hr = hr < 10 ? '0' + hr : hr;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  ampm.innerText = ampmt;
  hour.innerText = hr + ' :';
  weekday.innerText = 'test';
  minute.innerText = min + ' :';
  second.innerText = sec + ' ';
  date.innerText = dt + ' ' + monthNames[mn] + ',';
  weekday.innerText = days[day];
  setTimeout(() => {
    updateDate();
  }, 1000);
}
// setInterval(updateDate, 1000);
updateDate();
function setBg() {
  const randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  var r = document.querySelector(':root');
  // document.body.style.backgroundColor = '#' + randomColor1;
  console.log('clicked', randomColor1, randomColor2);
  r.style.setProperty('--primary-color', randomColor1);
  r.style.setProperty('--secondary-color', randomColor2);
}
document.querySelector('.btn').addEventListener('click', setBg);
