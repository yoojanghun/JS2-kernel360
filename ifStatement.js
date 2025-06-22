import random from './getRandom'

// 조건문 (If Statment)

const a = random();

if (a === 0) {
    console.log('a is 0');
} else if (a === 2) {
    console.log('a is 2');
} else if (a === 6) {
    console.log('a is 6');
} else {
    console.log('rest....');
}


// 조건문 (Switch statement)
// 어떤 값이 딱 떨어지는 값으로 분기 처리를 한다면(a === 0, a === 2) switch문 적절.

switch (a) {
    case 0:
        console.log('a is 0');
        break
    case 2:
        console.log('a is 2');
        break
    case 6:
        console.log('a is 6');
        break
    default:
        console.log('rest....');
}