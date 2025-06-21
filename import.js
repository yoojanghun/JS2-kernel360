import getType from "./getType";

// typeof 키워드: 데이터타입 출력

console.log(typeof "Hello");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);           // object가 출력됨
console.log(typeof {});             // object가 출력됨
console.log(typeof []);             // object가 출력됨


console.log(getType(123))
console.log(getType(false))
console.log(getType(null))          // Null 출력됨
console.log(getType({}))            // object 출력됨
console.log(getType([]))            // array 출력됨