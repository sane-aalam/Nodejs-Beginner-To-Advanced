// example-1
class Calculator {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
}

const cal = new Calculator();
const sum = cal.add(1, 2);
const sub = cal.sub(2, 2);
// calling metod
console.log(sum);
console.log(sub);
console.log(cal.mul(3, 4));

//-------------------- example-2

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.width * this.height;
  }

  // Setter
  set changeWidth(newWidth) {
    this.width = newWidth;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.changeWidth = 20;
console.log(rect.area); // 100

// ------------------------------------ example-3
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  info() {
    console.log(`This is a vehicle from ${this.brand}.`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Call parent constructor
    this.model = model;
  }

  info() {
    super.info(); // Call parent method
    console.log(`Model: ${this.model}`);
  }
}

// Creating of class (CAR)
const myCar = new Car("Toyota", "Corolla");
myCar.info();
