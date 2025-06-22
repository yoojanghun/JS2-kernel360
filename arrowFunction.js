// 화살표 함수
// () => {}

const double = function (x) {
    return x * 2;
}
console.log('double:', double(7));


const doubleArrow = (x) => {
    return x * 2;
}
console.log('Double Arrow:', doubleArrow(7));


const doubleArrow2 = x => x * 2                     // 함수내 return만 있을 때는 축약 가능 (그 외 다른 코드 추가되면 축약 불가)
console.log('Double Arrow2:', doubleArrow2(7));     // 중괄호는 생략해서 써야 함


const returnObject = x => ({name: "yoojanghun"})    // object 반환 시 소괄호 사용해야 함
console.log('return object:', returnObject());      