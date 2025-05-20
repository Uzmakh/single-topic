//? if-statements | if-else conditins | Use of comparison Operators

// let person = 17;
// let isRegistered = true;
// let isCitizen = false;

// if (person >= 18) {
//     if (isCitizen) {
//         if (isRegistered) {
//             console.log("He is eligible to vote.")
//         } else {
//             console.log("He is not eligible due to registeration status.")
//         }
        
//     } else {
//         console.log("He is not eligible to vote due to citizenship status.")
//     }
// } else {
//     console.log("He is not eligible to vote(being younger)")
// }

// ?  Another Example
// let age = 14;
// if (age >= 18) {
//     console.log("you can vote");     //if this is false
// } else if (age <= 18) {
//     console.log("You cannot vote");    //true
// } else if (age < 18) {
//     console.log("You cannot vote");    //or this true
// }

// let age = 17;
// if (age >= 18) {
//     console.log("You can vote");
// } if (age <= 18) {
//     console.log("You cannot vote");
// }

// Grading System
// let marks=90
// if (marks >= 80) {
//     console.log("A+");
// } else if (marks >= 60) {
//     console.log("A");
// } else if (marks < 33) {
//     console.log("F");
// }

// Seasons
// let month = "January";
// if (month === "January") {
//     console.log("Winter is here");
// } else if (month === "February") {
//     console.log("Spring is here");
// };

//* else-if checks the condition which if returns false- if-else-if
//* else executes the code when if-statement returns false- if-else

              //*  Nested if statement:
                //* Calculate Tax on Salary with folowing rule:

                //* Salary is less than 10,000     tax=5%
                //* Salary is between 10,000 and 100000    tax=10%
                //* Salary is greater than 1,00,000     tax=15%
                
// let salary = prompt("Enter salary.");
// let tax;
// let netSalary = salary - tax;
// let taxRate;

// if (salary >= 0 && salary < 10000) {
//   tax = (5 / 100) * salary; //(5/100)*salary
//   taxRate = "0.5%";
// } else if (salary > 10000 && salary < 100000) {
//   tax = (10 / 100) * salary;
//   taxRate = "0.10%";
// } else if (salary >= 100000) {
//   tax = (15 / 100) * salary;
//   taxRate = "0.15%";
// }
// console.log("Salary :", salary);
// console.log("Tax :", tax, "With Tax rate:", taxRate);
// console.log("Net Salary :", salary - tax);

// simple assignment
// let marks = 32;
// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("Grade: O");
//     } else {
//         console.log("Grade:A+");
//     }
// } else {
//     console.log("Better Luck next Time!");
// }

let color = "orange";

if (color === "red") {
  console.log("Stop");
} else if (color === "yellow"){
  console.log("Slow down");
} else if (color === "green") {
  console.log("Go");
} else {
  console.log("Traffic Light is broken!")
};
// Assignment # 04:
/**
 * Enter name of student and obtained marks out of 100.Calculate grade following the rule and display grade.
 * Marks(90-100)   Grade A
 * Marks(80-89)   Grade B
 * Marks(70-79)   Grade C
 * Marks(60-69)   Grade D
 * Marks(50-59)   Grade E
 * Marks(0-49)   Grade F
 */
// let studentName = prompt("Enter your name.");
// let obtainedMarks = prompt("Enter obtained marks.");
// let grade;

// if (obtainedMarks >= 90 && obtainedMarks <= 100) {
//   grade = "A";
// } else if (obtainedMarks >= 80 && obtainedMarks <= 89) {
//   grade = "B";
// } else if (obtainedMarks >= 70 && obtainedMarks <= 79) {
//   grade = "C";
// } else if (obtainedMarks >= 60 && obtainedMarks <= 69) {
//   grade = "D";
// } else if (obtainedMarks >= 50 && obtainedMarks <= 59) {
//   grade = "E";
// } else if (obtainedMarks >= 0 && obtainedMarks <= 49) {
//   grade = "F";
// }
// console.log("Student Name :", studentName);
// console.log("Obtained Marks :", obtainedMarks);
// console.log("Grade :", grade);

