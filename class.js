// Class

// function User(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }
// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }   
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // getFullName: function () {
    //     return `${this.firstName} ${this.lastName}`;
    // }
    // 위와 동일한 코드
}

const janghun = new User("janghun", "Yoo");
console.log(janghun);
console.log(janghun.firstName);
console.log(janghun.getFullName());