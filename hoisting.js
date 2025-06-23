// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수 선언이 함수 호출부보다 밑에 있어도 함수를 사용할 수 있다.

const a = 7;

double();

function double() {         // 함수 표현은 호이스팅 X
    console.log(a * 2);
}