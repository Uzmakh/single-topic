// ! CLASS-58
// ! Mastering Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("This is a Promise")
// });
// console.log(promise);

// function getResult(rollNo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Result of Student:" + rollNo);
            // resolve("Data Found Successfully.")
            // reject("Data Not Found");
//             reject("Incorrect Roll No");
//         }, 4000);
//     })
//    };

// let student1 = getResult(1);
// console.log(student1);

// student1.then((res) => {
//     console.log("Result Found:", res);
// })
// student1.catch((err) => {
//     console.log("Result Not Found:", res);
// })

// ! CLASS-59
//! Promise Chaining
function getResult(rollNo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Result of Student:" + rollNo);
			resolve("Data Found Successfully.")
			// reject("Data Not Found");
			// reject("Incorrect Roll No");
		}, 4000);
	})
};
// ? getting result simultaneously
// getResult(1).then((res) => {
// 	console.log("Result Found:", res);
// })
// getResult(2).then((res) => {
// 	console.log("Result Found:", res);
// })
// getResult(3).then((res) => {
// 	console.log("Result Found:", res);
// })

// ? getting result after some delay

// getResult(1).then((res) => {
// 	console.log("Result Found:", res);

// 	getResult(2).then((res) => {
// 		console.log("Result Found:", res);

// 	getResult(3).then((res) => {
// 		console.log("Result Found:", res);
// 	})
// });
// })

// ? Promise Chaining
// getResult(1).then((res) => {
// 	console.log("Result found:" + res);
// 	return getResult(2);
// }).then((res) => {
// 	console.log("Result found:" + res);
// 	return getResult(3);
// }).then((res) => {
// 	console.log("Result found:" + res);
// 	return getResult(4);
// })

// ! CLASS-60
// ! Master async-await
// ? async keyword gives promise
async function myFunction() {
	console.log("Javascript Tutorial");
};
myFunction();


// ? Example
function getResult(rollNo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Result of Student:" + rollNo);
resolve("Data Found Successfully.")
reject("Data Not Found");
            reject("Incorrect Roll No");
        }, 4000);
    })
};
async function result() {
	await getResult(123);
	await getResult(124);
	await getResult(125);
};
// result();

// ! CLASS-61
// ! IIFE 

(async function result() {
	await getResult(123);
	await getResult(124);
	await getResult(125);
})();
