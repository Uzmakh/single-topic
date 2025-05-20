// CLASS-21 (Shahid Naeem)
// Template Literals
const website = 'freecodecamp';
const message = `Welcome to ${website}`;

// alert(message);
console.log(message);

// Template Literals vs Regular Strings
// String Concatenation
const userName = 'Marie'
const balance = 10

// Using regular string
const str1 = 'Hi ' + userName + ',' + ' your balance is ' + balance + '.'
console.log("Regular string: ", str1)

// Using template literal
const str2 = `Hi ${userName}, your balance is ${balance}.`
console.log("Template literal: ", str2)

// Multi-line Strings
const regularString = 
'Hello there! \n' +
'Welcome to our website. \n' +
'How can we help you today?'

const templateLiteral = 
`Hello there!
Welcome to our website.
How can we help you today?`

console.log(regularString)
console.log(templateLiteral)
// Both the regularString and templateLiteral variables give the same output. The template string recognises whitespaces and linebreaks automatically.

// Some Practical Use Cases of Template Literals
// Generating HTML Markup
const user = {
  name: "Marie",
  age: 25,
};

const userProfile = `
<div>
  <h2>Name: ${user.name}</h2>
  <p>Age: ${user.age}</p>
</div>`
// Creating Dynamic SQL Queries
// Localization and Internalization
// (Used for translation purposes)
// Tagged Template Literals

/*====================================================
   https://www.freecodecamp.org/news/template-literals-in-javascript/
===================================================*/ 