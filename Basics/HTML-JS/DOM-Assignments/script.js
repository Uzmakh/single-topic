// Assignment-01
let newText = prompt("Enter new text in heading.");
// console.log(newText);
let h4 = document.querySelector("h4");
h4.innerText = h4.innerText + newText;

// Assignment-02
let myBoxes = document.querySelectorAll(".boxes");
console.log(myBoxes);

// accessing each box and modify its text
// myBoxes[0].innerText = "The firstbox";
// myBoxes[1].innerText = "The second box";
// myBoxes[2].innerText = "The third box";
// myBoxes[3].innerText = "The forth box";

// myBoxes[1].innerHTML = "The second box";

// But its not a good practice, we'll do it through loop
// let no = 1;
// for (val of myBoxes) {
//     val.innerText = `Box No. is : ${no}`;
//     no++;
// }