const boxTime = document.querySelector('#box_time');
const numStart = boxTime.querySelectorAll('.num_start')[0];
const numEither = boxTime.querySelectorAll('.num_either')[0];

const addTime = (dateTime) => {
  return dateTime = dateTime < 10? '0'+dateTime : dateTime;
} 
const nextTimer = () => {
  const now = new Date();
  const nowTime = now.getTime();
  const endTime = 5; //n분마다
  const afterMin = new Date( nowTime + (1000*(endTime * 60)) );
  const getY = afterMin.getFullYear();
  const getMon = afterMin.getMonth() +1;
  const getD = afterMin.getDate();
  const getH = afterMin.getHours();
  const getMin = afterMin.getMinutes();
  const getSec = afterMin.getSeconds();
  const getNowMin = now.getMinutes();
  
  const nextH = (getH == 0) ? 24 : getH;
  const nextMin = getMin - (getNowMin%endTime);

  numStart.innerHTML = addTime(nextH)+':'+addTime(nextMin);
  return {
    getY : getY,
    getMon : getMon,
    getD : getD,
    getH : getH,
    nextMin : nextMin,
    nowTime : nowTime
  }
}

const countTimer = () => {
  const nextTime = nextTimer();
  const countDownDate = new Date(nextTime.getY,nextTime.getMon,nextTime.getD,nextTime.getH,nextTime.nextMin).getTime();
  const distance = (countDownDate - 13000) - nextTime.nowTime;
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
  const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

  const countTxt = addTime(minutes)+':'+addTime(seconds);
  const resultCountTxt = (minutes == 0 && seconds == 0) || (minutes == 4 && seconds > 40 ) ? '마감' : countTxt;
  
  numEither.innerHTML = resultCountTxt;
}

countTimer();
setInterval(countTimer, 1000);