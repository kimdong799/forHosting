const clockContainer = document.querySelector(".js-clock"),//js clock의 자식 class반환
  clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours < 10 ? `AM 0${hours}`:`PM ${hours}`}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`; // 화면에 출력
}
function init(){
  setInterval(getTime,1000); // 1초마다 함수 실행 리얼타임으로 변경
}
init();