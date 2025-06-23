// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)안의 함수

function timeout() {
    setTimeout(() => {
        console.log("Hello");
    },3000)
}
timeout()
console.log("Done!!");


// 위처럼 코드를 작성하면 Done!!이 먼저 출력되고 3초 뒤에 Hello가 출력됨.
// 함수의 실행 위치를 보장하는 데 Callback이 사용된다.

function timeout2(cb) {
    setTimeout(() => {
        console.log("Nice to meet you");
        cb();
    }, 3000)
}
timeout2(() => {
    console.log("Done!!")
});