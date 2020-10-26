const loading = document.getElementById('loading');
const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();//获取当前年份
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);//获取新年日期

year.innerText = currentYear + 1;//年份展示

//倒数器函数
function updateCountdown() {
  const currentTime = new Date();//当前日期
  const timeDifference = newYearTime - currentTime;

  const d = Math.floor(timeDifference / 1000 / 60 / 60 /24);
  const h = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  const min = Math.floor(timeDifference / 1000 / 60 ) % 60;
  const s = Math.floor(timeDifference / 1000) % 60;

  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = min < 10 ? '0' + min : min;
  seconds.innerText = s < 10 ? '0' + s : s;
}

// 关闭加载图标
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
},1000);

//每秒调用一次
setInterval(updateCountdown, 1000);

