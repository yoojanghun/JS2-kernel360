// 형 변환(Type Conversion)

const a = 1;
const b = '1';

console.log(a === b);       // 일치 연산자
console.log(a == b);        // 동등 연산자 (자동으로 형 변환하여 비교)


// 참 같은 값(대부분)
// true, {}, [], 0이 아닌 실수, 문자열... => true로 형변환해서 판단

// 거짓 같은 값 (암기해라)
// false, '', null, undefined, 0, -0, NaN(Not a number) => false로 형변환해서 판단
if(true) {
    console.log("난 출력된다11");
}

if('false') {
    console.log("난 출력된다22");
}

if({}) {
    console.log("난 출력된다33");
}

if(-4.2) {
    console.log("난 출력된다44");
}


if(false) {
    console.log("난 출력 안됨11");
}

if('') {
    console.log("난 출력 안됨22");
}

if(0) {
    console.log("난 출력 안됨33");
}