// 변수 유효범위(Variable Scope)
// let, const => 함수나 if, foor 반복문 내에서(중괄호 블럭 내에서) 선언한 변수는 밖에서 사용 못함
// var => 함수 레벨의 유효 범위 내에서 동작함

function scope() {
    if(true) {
        let a = 123;
    }
    console.log(a);         // 오류 (let이 아니라 var이면 오류 아님)
}
scope();