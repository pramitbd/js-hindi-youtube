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