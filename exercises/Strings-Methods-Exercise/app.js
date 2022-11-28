// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

//created variable 
var str = "HelLO"

var upperCase = str.toUpperCase()
//console.log(upperCase);//HELLO

var lowercase = str.toLowerCase()
//console.log(lowercase);//hello

var concat = upperCase.concat(lowercase)
console.log(concat);//HELLOhello

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// > Hint: You'll need to use Math.floor().
//findMiddleIndex("Hello") // => 2
//findMiddleIndex("Hello World") // => 5

var count1 = "Hello"
var count2 = "Hello World"

 var parse = parseInt(count1.length)//5
 var half = Math.floor(parse / 2)
 console.log(half);//2

var parse2 = parseInt(count2.length)//11
var half2 = Math.floor(parse2 / 2)
console.log(half2);//5

//--------------------------------------------------------------
// IndexOf METHOD
// var middle = count1.indexOf("l");
// console.log(middle);//2

// var middle2 = count2.indexOf(" ");
// console.log(middle2);//5

//--------------------------------------------------------------

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
var hello = "Hello"
var sliced1 = hello.slice(0,2)
console.log(sliced1);//He

var hWorld = "Hello World"
var sliced2 = hWorld.slice(0, 5)
console.log(sliced2);//Hello

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

//Hint: If your string length is odd, use Math.floor() to round down.
//capilizeAndLowercase("Hello") // => "HEllo"
//capilizeAndLowercase("Hello World") // => "HELLO world"

var string = "Hello"

var he = string.slice(0,2).toUpperCase()
var llo = string.slice(2,5).toLowerCase()

function modify(string){
  return he + llo
}
console.log(modify(string));//HEllo

var string1 = "Hello World"

var firstHalf = string1.slice(0,5).toUpperCase()
var secondHalf = string1.slice(6,11).toLowerCase()

function modify1(string1){
  return firstHalf + " " + secondHalf
}
console.log(modify1(string1));//HELLO world