var readlineSync = require('readline-sync');
//  var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');


// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');

var num1 = readlineSync.question("Enter the first number ");
console.log("Your First Number: ${num1}");
var num2 =readlineSync.question("Enter the second number "); 
console.log("Your Second Number: ${num2}"); 


function add(num1, num2){
  return Number(num1) + Number(num2);
}

function sub(num1, num2) {
  return Number(num1) - Number(num2);
}

function mul(num1, num2) {
  return Number(num1) * Number(num2);
}

function div(num1, num2) {
  return Number(num1) / Number(num2);
}

function operatorChoice(){
  let operator = readlineSync.question('Select operator: ');
  switch (operator){
    case "+":
    console.log("The Result is: ");
    console.log(add(num1, num2));

    return operator;
    case "-":
    console.log("The Result is: ");
    console.log(sub(num1, num2));

    return operator;
    case"*":
    console.log("The Result is: ");
    console.log(mul(num1, num2)); 

    return operator;
    case"/":
    console.log("The Result is: ");
    console.log(div(num1, num2)); 

    return operator;
    default:
      console.log("Please enter '+', '-', '*', or '/'! or the TASK WILL RESART!");

  }
}
peratorChoice();
