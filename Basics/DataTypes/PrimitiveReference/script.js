let num1 = 6;
let num2 = num1;


console.log(num1);
console.log(num2);
num2++;
num1++;

console.log(num1);
console.log(num2);
// * Each variable gets separate memory address, being stored in different placeholder(space),so gets separate memory address; on changing them, they behave separately.
// * Primitive data types have their own memory reference.


let array1 = ["book", "pencil"];
let array2 = array1;

console.log(array1);
console.log(array2);

array1.push("eraser");

console.log(array1);
console.log(array2);
// *  Both arrays have the same memory ref.
// * so change in one causes the change in the other also.