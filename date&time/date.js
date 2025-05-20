/**
  Reference: https://www.freecodecamp.org/news/javascript-date-format-how-to-format-a-date-in-js/
 
 */
// There are two constructors to get date in Js,
//    Date() and new Date()

let stringDate = Date();
console.log(stringDate);

let objectDate = new Date();
console.log(objectDate);
// How to format this object date?(as we don't need all the detail this object gives us)

/* Three date methods, to get date in desired date-format 
     getDate()
     getMonth()
     getFullYear()
 */

let day = objectDate.getDate();
console.log(day);

let month = objectDate.getMonth();
month = month + 1;
console.log(month);

let year = objectDate.getFullYear();
console.log(year);

// Getting the desired format
// with concatenating 
let format1 = (month) + "/" + day + "/" + year;
console.log(format1);

let format2 = day + "/" + (month) + "/" + year;
console.log(format2);

let format3 = (month) + "-" + day + "-" + year;
console.log(format3);

let format4 = day + "-" + (month) + "-" + year;
console.log(format4)

// with template literal
let format5 = `${month}/${day}/
${year}`;
console.log(format5);

let format6 =`${day}/${month}/${year}`;
console.log(format6);

let format7 = `${month}-${day}-${year}`;
console.log(format7);

let format8 = `${day}-${month}-${year}`;
console.log(format8)

/**
 * Another scenario,
 *  to get the month and day value to be preceded by 0 
 */
if (day < 10) {
    // day = "0" + day;
    day = `0${day}`;
}
if (month < 10) {
    // month = "0" + month;
    month = `0${month}`;
}
let format9 = `${month++}/${day}/
${year}`;
console.log(format9);