const people = ["Kelly", "Sally", "John",]
console.log("Original :", people)

// const peopleCopy = [...people]
// old method to replace some element
// people[2] = "New"

// console.log(peopleCopy) 
// console.log(people)      //we get mutated array

// Now JS gives us these 4 methods 
// .with(index, newvalue)
// const newPeople = people.with(2, "New")
// console.log("Original :", people)  
// console.log("New :", newPeople)  

// .sort()
// people.sort()
// console.log("Original :", people)      //it modifies my original array

// so
// const sortedPeople = [...people].sort()
const sortedPeople = people.toSorted()     //modern js
console.log("Sorted", sortedPeople)
console.log("Original :", people)
//this sortedPeople array is modified array and I kept my original array as it is.

// .toReversed()
const reversedPeople = people.toReversed()
console.log("Reversed", reversedPeople)
console.log("Original :", people)

// .tospliced()
// people.splice(0, 2, "New")
// console.log("Original :", people)   //it modifies original array
// so 
const splicedPeople = people.toSpliced(0, 2, "New");
console.log("Spliced :", splicedPeople)
console.log("Original :", people)
