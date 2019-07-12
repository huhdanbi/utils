const time = document.getElementsByClassName('time')[0];
const button = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input');

setInterval(() => {
	const date = new Date();
  const getHou = date.getHours();
  const getMin = date.getMinutes()
  time.value = getHou + ':' + getMin;
}, 1000);

const outerArr = [];
button.addEventListener('click', () => {
  const arr = [];

  for(let i =0; i<input.length; i+=1){
    arr.push(input[i].value);
  }

  if( outerArr.length > 0 && outerArr[outerArr.length - 1][0] == time.value ){
    console.log('ok');
    console.log(outerArr[outerArr.length-1]);
    outerArr[outerArr.length-1] = arr;
  }else{
    console.log('nope');
    outerArr.push(arr);
  }
  console.log(outerArr);
  
});
