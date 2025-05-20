//! Class-51 !!!!!!

// An object is a collection of data in key-value pairs;The values may be string, boolean, numbers, functions...
let car = {
  brand: "Honda",
  model: "City",
  price: 3500000,
  //   function in object
  // myCar: function () {
  //     console.log("I bought a new car!");
  // }
  //?   Alternatively,
  myCar() {
    console.log("I bought a new car!");
  },
};
console.log(car);
console.log(car.model);
console.log(car.brand);
console.log(car.price);
console.log(car.myCar);
console.log(car.myCar());

//? how to delete an entry/value
delete car.model;
console.log(car);

//! Prototypes
//! to know about the prototype of objects
let colors = ["red", "green", "blue", "yellow"];
console.log(colors);

//! Prototype of an object is the default property of that object which has some methods & properties to be used in that object

let discount = {
  price: 5000,
  dis() {
    console.log(`10% discount applied; Actual Price is ${this.price}`);
  },
};
let product = {
  price: 5000,
};
console.log(discount.dis()); //undefined-it is revealed in line 31
console.log(discount.price); //if price included in discount-object
console.log(discount.dis); //function displayed as it is
console.log(discount.dis()); //undefined-it displays the result of the function
// (it is revealed in line 31)

console.log(discount);
console.log(product);

//? Calling an object(-function) into another object
product.__proto__ = discount; //discount-object can now be used in product-object

// console.log(discount);
// console.log(product);
//? Displaying discount message in product
console.log(product.dis);

//? Displaying discount message in multiple products
let product1 = {
  price: 5000,
};
let product2 = {
  price: 6000,
};
let product3 = {
  price: 5500,
};
let product4 = {
  price: 3500,
};
let product5 = {
  price: 8000,
};

product1.__proto__ = discount;
product2.__proto__ = discount;
product3.__proto__ = discount;
product4.__proto__ = discount;
product5.__proto__ = discount;

// each product-object has now discount-object in its prototype
console.log(product1.dis());
console.log(product2.dis());
console.log(product3.dis());
console.log(product4.dis());
console.log(product5.dis());

//! Class-52  !!!!!!
//? Syntax to Create a class:
class className {
  constructor(parameters) {}
  method1() {}
}

//? Structure/Blueprint of an Object
// class employee {
//   constructor() {
//     console.log("New Employee Created!");
//   }
//   detail() {
//     console.log(`Employee: ${this.fullName} and Salary:${this.salary}`);
//   }
// }

// let emp1 = new employee();
// emp1.fullName = "Shahid Naeem";
// emp1.salary = 34000;
// console.log(emp1);

// let emp2 = new employee();
// // constructor will show that new employee is created
// // give its detail
// emp2.fullName = "Muhammad Saleem";
// emp2.salary = 40000;

// More precisely
class employee {
  constructor(fullName,salary,position) {
    console.log("New Employee Created!");
    this.fullName = fullName;
    this.salary = salary;
    this.position = position;
   
  }
  detail() {
    console.log(`Employee: ${this.fullName}, Salary:${this.salary}, he is : ${this.position}`);
  }
}

let emp1 = new employee("Shahid Naeem", 34000, "Manager");
let emp2 = new employee("Muhammad Saleem", 40000,"Designer");
let emp3 = new employee("Subhan Ilahi", 90000,"Web-Developer");
let emp4 = new employee("Khan Sher", 100000, "Marketer");
let emp5 = new employee("Hassan Ahmed", 60000,"Sales-man");
let emp6 = new employee("Saad Suleman", 70000, "Principal");


console.log(
  employee
);