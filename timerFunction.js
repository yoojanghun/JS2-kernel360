// 타이머 함수
// 시간 단위는 ms
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수 종료
// clearInterval(): 설정된 Interval 함수 종료

setTimeout(function () {
    console.log("Hello");
}, 3000);


setTimeout(() => {
    console.log("Bye");
}, 3000);


const timer = setTimeout(() => {
    console.log("Bye");
}, 5000);


// timer 종료
const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
    clearTimeout(timer);
})


const timer2 = setInterval(function () {
    console.log("Hello");
}, 3000);


h1El.addEventListener("click", () => {
    clearInterval(timer2);
})