// 즉시 실행 함수 (함수를 한 번만 실행할 때 사용하면 유용)
// IIFE: Immediately-Invoked Function Expression

const a = 7;
function double() {
    console.log(a * 2);
}
double();


(function () {                  // (함수 코드) ()
    console.log(a * 2);
})();

// 또는 아래처럼 사용
(function () {                  // (함수 코드 ())
    console.log(a * 2);
}())