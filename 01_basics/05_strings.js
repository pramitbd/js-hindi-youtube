const name = "pramit";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pramit-bd');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log((anotherString));

const newStringOne = "   pramit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pramit.com/pramit%20bd";

console.log(url.replace("%20", "-"));

console.log(url.includes('pramit'));
console.log(url.includes('mim'));

console.log(gameName.split("-"));