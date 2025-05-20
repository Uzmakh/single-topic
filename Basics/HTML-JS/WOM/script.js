// console.log(window);
// console.log(document.body);
// console.log(window.document);




// Accessing the html elements and modify them
// document.body.style.background = "white";
// changing text of an element
// document.body.childNodes[3] = h1;
// document.body.childNodes[1].innerText = "Document Object Model";
// document.body.childNodes[3].childNodes[1].innerText = "Learn JavaScript";                //div-h1
// document.body.childNodes[3].childNodes[1].style.fontSize = "40px";
// // document.body.childNodes[3].childNodes[11].innerText = "Download";            //button
// document.body.childNodes[5].innerText = "I am in black color";   //p-outside div

// CLASS-39  -  How to access/get HTML Elements
//               -getElementBYId
//               -getElementsByClassName
//               -getElementsByTagName
// CLASS-40
// let value = document.querySelector("div");
// let value1 = document.querySelector("#id");
// let value2 = document.querySelector(".my-text");

// console.log(value);
// console.dir(value);
// console.dir(value1);
// console.dir(value2);

// innerText
// console.log(value.innerText);       //displays text
// console.log(value.innerHTML);      //displays text with tags
// console.log(value.textContent);    //displays text of the hidden elements
// console.log(value.children);
// console.log(value.firstElementChild);
// console.log(value.lastElementChild);
// console.log(value.firstChild);
// console.log(value.lastChild);

// CLASS-42
//     getAttribute and setAttribute
// getting elements by getAttribute
// let heading = document.querySelector("h1");
// console.log(heading.getAttribute("id"));
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
// setting attribute
para.setAttribute("class", "myNewClass");
console.log(para.getAttribute("class"));
// let button = document.querySelector("button");
// console.log(
//     button.getAttribute("id")
// );

// changing styling through JS
let h2 = document.querySelector("h2");    //get the element
h2.style.background = "red";     //set the element
para.style.color = "blue";
para.style.fontSize = "25px";