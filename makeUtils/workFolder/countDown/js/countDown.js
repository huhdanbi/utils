const $boxTime = document.querySelectorAll('.box_time'); 
  
//게임시작시간 및 카운트다운
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

  // $boxTime.children('.num_start').text( addTime(nextH)+':'+addTime(nextMin) );
  return {
    getY : getY,
    getMon : getMon,
    getD : getD,
    getH : getH,
    nextMin : nextMin,
    nowTime : nowTime
  }
}


const countTimer = (state) => {
  const nextTime = nextTimer();
  const countDownDate = new Date(nextTime.getY,nextTime.getMon,nextTime.getD,nextTime.getH,nextTime.nextMin).getTime();
  const distance = (countDownDate - 20000) - nextTime.nowTime;
  
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
  const seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  
  if(minutes == 59 && minutes < 34 ){
    minutes = 4;
  }
  console.log(minutes, seconds)
  
  const countTxt = addTime(minutes)+':'+addTime(seconds);
  
  // const resultCountTxt = (minutes == 0 && seconds < 20) || (minutes==4 && seconds > 53) ? '마감' : countTxt;
  const resultCountTxt = (minutes == 0 && seconds == 0) || minutes == 59 ? '마감' : countTxt;
  
  // $boxTime.children('.num_either').html( resultCountTxt );
  
  if( minutes == 4 && seconds == 32 ){
    location.reload();
  }
}

countTimer();
setInterval(countTimer, 1000);





