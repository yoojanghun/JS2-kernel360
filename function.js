// 함수 복습

function sum(x, y) {
    if (x < 0) {
        return          // 함수에서 return을 만나면 함수 종료 (return 밑의 코드는 실행 X)
    }
    return x + y;       
}

console.log(sum(-3, 3));    // undefined


const a = sum(1, 3);
const b = sum(4, 12);

console.log(a);         // 함수의 값을 여러 번 사용할 때, 
console.log(a);         // 값을 변수에 담아서 함수 호출을 줄이는 것이 컴퓨터 자원을 절약하는 데 효율적
console.log(a);
console.log(a);

console.log(sum(4, 12));
console.log(sum(4, 12));
console.log(sum(4, 12));
console.log(sum(4, 12));


function sum2() {
    console.log(arguments);                 // 함수 내에서 arguments 객체 사용 가능 (매개변수가 너무 많을 때 사용)
    return arguments[0] + arguments[1];     // 각각 5와 6
}

sum2(5, 6);