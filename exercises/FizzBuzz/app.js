// Write a short program that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

let result = [];
let count = 1;

function fizzBuzz(){
    while (count <= 100){
      if (count % 3 === 0 && count % 5 === 0){
        result.push("FizzBuzz");//fizzbuzz
      } else if (count % 3 === 0){
          result.push("Fizz");
      } else if (count % 5 === 0){
          result.push("Buzz");
      } else {
          result.push(count);
      }
      count++;
    }
    console.log(result)
}
fizzBuzz();