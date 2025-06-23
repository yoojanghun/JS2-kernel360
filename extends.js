class Vehicle {
    constructor(name, wheel){
        this.name = name;
        this.wheel = wheel;
    }
}
const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);


class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel);             // super는 확장된 class인 Vehicle임.
    }
}
const myBicycle = new Bicycle("삼천리", 2);
const sonsBicycle = new Bicycle("세발", 3);
console.log(myBicycle);
console.log(sonsBicycle);


// 기존의 class의 기능을 확장함 => extends
class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel);
        this.license = license;
    }
}
const myCar = new Car("벤츠", 4, true);
const sonsCar = new Car("포르쉐", 4, false);
console.log(myCar);
console.log(sonsCar);