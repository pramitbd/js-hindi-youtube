function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pramit"));
console.log(loginUserMessage("Pramit"));