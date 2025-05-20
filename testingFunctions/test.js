// Frontendmasters.com
// Using Jasmine tool for testing 
// Example-1
function addTwoToEveryNumberInTheList(list) {
    // an example for you to see how the tests work

    const newList = [];

    for (let i = 0; i < list.length; i++) {
        newList.push(list[i] + 2);
    }
    console.log(newList)
    return newList;
}

addTwoToEveryNumberInTheList([1, 2, 3, 4]);


// Example-2
function findLargestNumber(list) {
    // return the largest number in array
    if (list.length === 0) {
        return undefined;
    }
    // let largest; OR
    let largest = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
console.log(largest)
    return largest;
}

findLargestNumber([45, 23, 24, 12]);

// Example-3
function makeDogObject() {
    // return a dog object that
    //   has a speak method that returns woof
    //   has a name property of "Fido"
    //   has a color property of "white"
    //   has an age property of 6

  return {
    speak() {
      return "woof";
    },
    name: "Fido",
    color: "white",
    age: "6"
};
}
makeDogObject();

// Example-4
// map method, forEach method, for-loop
function getListOfNames(list) {
  // list is an array of objects that looks like this
  // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
  const workersNames = list.map(function (worker) {
    return worker.name;
  })
  // const workers_names = list.map(({name}) => name)

  // another method to do this,
  const names = [];

  for (let i = 0; i < list.length; i++){
    // const person = list[i];
    // const name = person.name;
    // names.push(name);

    names.push(list[i].name);
  }
  // return a list of all the workers' names
console.log(workersNames)
// console.log(workers_names)
  return names;
}
getListOfNames(["Bobby Baratheon", "Jonny Snow", "Dani Targaryen"]);

// Example-5
function getAverageAge(list) {
  // using the same list as above, get the average age of all the workers'
  let sum = 0;
  for (let i = 0; i < list.length; i++){
    sum += list[i].age;
  }
  // use of reduce function to get average(alternatively)
  const sum1 = list.reduce((runningSum, currentPerson) => runningSum + currentPerson.age, 0);

  return sum1 / list.length;
}

// Example-6
function getAllEngineers(list) {
  // using the same list as above, return a list of all people who have the word "Engineer" in their jobTitle
  const engineers = [];
  for (let i = 0; i < list.length; i++){
    const person = list[i];
    if (person.title.includes("Engineer")) {
      engineers.push(person.title);
    }
  }

  // const engineers = list.filter(person => {
  //   return person.title.includes("Engineer");
  // }).map(person => person.name)

  // alternatively
  const engineers2 = list.filter(({ title }) => title.includes("Engineer")).map(({ name }) => name)
  
  return engineers;
      // return ["Altaïr", "Ezio", "Connor", "Bayek", "Alexios"];
}

// Example-7
function sort(list) {
  // sort a list of numbers into ascending order
  // if you need more help, Google how to do bubble sort
  // you can sort, if you want to write it by hand, use bubble sort or insertion sort

// method-1
  const sortedList = list.sort(function (num1, num2) {
    if (num2 > num1) {
      return 1
    } else if (num2 < num1) {
      return -1
    }
    return 0;
  });
  // method-2
  const sortedList1 = list.sort(function (num1, num2) {
    return num2 - num1;
  })
  return sortedList;

  // return [1, 2, 3, 4];
}