// 산술 연산자(arithmetic operator)
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);


// 할당 연산자(assignment operator) (=, +=, -=, *=, /=, %=)
let a = 2;
a += 1;
console.log(a);


// 비교 연산자(comparision operator)
function isEqual(x, y) {
    return x === y;         // data type, 값이 모두 같니?
}

function isNotEqual(x, y) {
    return x !== y;         // data type, 값이 모두 다르니?
}

console.log(isEqual(1, 1));
console.log(isEqual(1, '1'));

console.log(isNotEqual(1, 1));
console.log(isNotEqual(1, '1'));


// 논리 연산자(logical operator) (&&, ||, !)
const d = 1 === 1;              // true
const e = 'AB' === 'AB';        // true
const f = false                 // false

console.log(d);
console.log(e);
console.log(f);

console.log('&&: ', d && e && f);
console.log('||: ', d || e || f);
console.log('!: ', !d);