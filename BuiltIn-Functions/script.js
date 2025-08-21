//? BuiltIn-Functions
 alert("stringVariable/sentence");     //ok
// alert("Something is wrong");
 console.log("stringVariable/sentence");   //used for debugging
// console.error("stringVariable/sentence: This is an error message.");   //used for debugging
document.write("Something to write");
prompt("msg", "default");    //to get user-input
  confirm("Do you want to delete it?");   //ok-cancel to deny
// prompt("Write your name.", "Uzma Khan");
// let roll = prompt("Enter your roll no : ");
// console.log(roll);
// confirm("Do you want to delete this task?");

/** JS is an event-driven language.
-Page-load is an event. On page-load event, alert is displayed
*/

// BuiltIn-Functions of DOM
/**-document.getElementById("id");
-document.getElementsByClassName("className");
-alongwith innerHTML
*/

// Using prompt to get user data
function call() {
    var name = prompt("Enter your name.");
    // document.write(name);
    document.getElementById("name").innerHTML = name;
}
