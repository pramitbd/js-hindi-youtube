// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Pramit",
    "full name": "Pramit R.",
    [mySym]: "key1",
    age: 18,
    location: "Dhaka",
    email: "pramit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof mySym);

    