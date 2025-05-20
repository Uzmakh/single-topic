// objects and accessing its values
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};
// accessing the object itself and its values
console.log(person);
console.log(person.name);
console.log(person["name"]);
console.log(person.wantsTacosRightNow);

// Case-1:
// Used in conjunction with functions they're very powerful. Take this example:
const person1 = {
  name: "Brian",
  ageRange: "25-35",
};
const person2 = {
  name: "Jack",
  ageRange: "65-75",
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Daft Punk you crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);
// Now we're able to pass all this information as one package which makes it easy to keep track of since we're just passing one variable. You'll see this become even more useful as we start integrating with servers and APIs.

// Case-2:
// Objects can even have their functions! Let's see that.
const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  },
};

dog.speak(); //object-name.function-name()

// Case-3:
// Objects can as well have nested objects inside of them.
// Nested Objects
// const me = {
//   name: {
//     first: "Brian",
//     last: "Holt",
//   },
//   location: {
//     city: "Seattle",
//     state: "WA",
//     country: "USA",
//   },
// };

// console.log(me);
// We are now creating a function to get me-address
// his more precise location is here,
const me = {
  name: {
    first: "Brian",
    last: "Holt",
    logMeOut() {
      console.log(this);
    },
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA",
  },
  getAddress() {
    `${this.name.first} ${this.name.last}
      ${this.location.street}  ${this.location.streetNumber} ${this.location.city} ${this.location.state} ${this.location.zipCode} ${this.location.country}`;
  },
};
console.log(me.name.logMeOut());
console.log(me.getAddress());

// anywhere you are in JavaScript you have a context you are in. You can reference that context by using this. If I just reference this from the outtermost layer, it'll be the global object, which in the browser is something called window. window already has a bunch of stuff on it. For example:
// console.log(this === window);
// console.log(this.scrollY);
// console.log(window.scrollY);
// As you can see from the first line, you can see that in this context, window is the this at that time. However, in the example above when we're doing the address, the this is the object since when I call the function, it's created inside of an object. That object then becomes this when getAddress is called. As soon as the function completes, the context is destroyed and the context goes back to being what it was before, in this case window.
// A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the this will be that object. If not, it'll be the global object, window.
