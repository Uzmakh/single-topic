//! CLASS 53   ////

class parent {
    show() {
        console.log(
            "This is Parent area"
        )
    }
};
// "extends" inherit the properties and functions of the parent into child
    class child extends parent{

    }
let shahid = new child();

//! Example:
// class company{
//     brand = "Samsung";
//     location = "Pakistan";
// // a function used in an object
//     show() {
//         console.log(`Made in ${this.location} by ${this.brand}`);
//     }
// };
// //? We create a class-A72 with a model function
// class A72 extends company{
//     model() {
//         console.log("Price of the Model is : 75000/-")
//     }
// };
// class A50 extends company{
//     model() {
//         console.log("Price of the Model is : 50,000/-")
//     }
// };

//? Create an object with the class A72
// let ph1 = new A72();
// let ph2 = new A50();



// // Parent class
// class company {
//     brand = "Samsung";
//     location = "Pakistan";
//     // a function used in an object
//     show() {
//         console.log(`Made in ${this.location} by ${this.brand}`);
//     }
// };
// // child class
// class A72 extends company {
//     model() {
//         console.log("Price of the Model is : 75000/-")
//     }
// };
// let ph1 = new A72();

// ! CLASS 54 ////
//? Parent class with constructor
class company {
    constructor(color) {
        this.color = color;
    }
    brand = "Samsung";
    location = "Pakistan";
    // a function used in an object
    show() {
        console.log(`Made in ${this.location} by ${this.brand}; mobile color is ${this.color}`);
    }
};
//? child class
class A72 extends company {
    constructor(color) {
        super(color);
        this.color = color;
    }
    model() {
        console.log(`Price of the Model is : 75000/-`);
        // this.show();
        super.show();
    }
};
let ph1 = new A72("blue");