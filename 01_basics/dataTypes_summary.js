// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 345655465684656562265n;

// Reference (non-primitive)

// Array, Objects, Functions

const heros = ["batman", "superman", "spiderman"]
let myObj = {
    name: "pramit",
    age: 32,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3





// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "pramit@gmail.com";

let anotherName = myYoutubename;

anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "pramit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);