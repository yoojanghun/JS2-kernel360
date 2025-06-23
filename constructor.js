const janghun = {
    firstName: "Janghun",
    lastName: "Yoo",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(janghun.getFullName());


const amy = {
    firstName: "amy",
    lastName: "Kim",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(amy.getFullName());


const neo = {
    firstName: "neo",
    lastName: "Smith",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(neo.getFullName());

// 생성자(constructor): 객체를 만들기 위한 틀로 사용되는 함수
// 위처럼 비슷한 모양의 객체를 여러번 선언할 때는 메모리 낭비가 심하다. 
// 각각의 객체가 메모리에 저장되고, 객체 안 함수도 3번씩 저장된다.
function User(first, last) {        // User는 생성자 함수
    this.firstName = first;
    this.lastName = last;
}

// prototype: 객체 간 속성, 메서드를 공유할 수 있도록 하는 참조 공간
// 생성자 함수 User에는 서로 다른 값이 들어오지만, 아래 함수는 동일함.
// User에 함수를 만들면 인스턴스 생성될 때마다 함수가 메모리에 생성됨 (메모리에 1번만 만들어짐)
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Janghun, Amy, Neo는 인스턴스
const Janghun = new User("Janghun", "Yoo");
const Amy = new User("Amy", "Kim");
const Neo = new User("Neo", "Smith");

console.log(Janghun.firstName);
console.log(Janghun.getFullName());
console.log(Amy.getFullName());
console.log(Neo.getFullName());

// 생성자는 비슷한 구조의 객체를 여러 개 만들기 위한 틀이고, 
// prototype은 그 객체들끼리 공통 속성이나 메서드를 공유하기 위한 공간이다."