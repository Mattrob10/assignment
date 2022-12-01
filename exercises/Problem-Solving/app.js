// Write a function that takes an array of numbers and returns the largest (without using Math.max())

//  function largest() {
//    let maxNumb = [0];
//    for (let i = 0; i < arguments.length; i++) {
//      if (arguments[i] > maxNumb) {
//        maxNumb = arguments[i];
//      }
//    }
//    console.log(maxNumb);
//   }

//  largest(6, 13, 250, 3);//250
//  largest(3, 5, 2, 8, 1);//8
// largest(-13, 40, 3, 0, 19, 22);//40

// // test data
// console.log(largest([6, 13, 250, 3])) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

//// This is will give you the smallesst value in the Array

// var arr = [-13, 40, 3, 0, 19, 22];
// var smallest = arr[0];
// for(var i = 1; i < arr.length; i++){
//   if (arr[i] < smallest){
//         smallest = arr[i];
//   }
// }
// console.log(smallest);// -13


// Write a function that takes an array of words and a character and returns each word that has that character present.
// test data

   const item = ["yellow", "green", "^up^", "down", "dog"];
   const filterItems = (letters) => {
       return item.filter(item => item.indexOf(letters) > -1);
     }
    console.log(filterItems("h"));//[ '$hello!', 'test!' ]


//  const item = ["#3", "$$$", "C%4!", "Hey!"];
//  const filterItems = (symbols) => {
//      return item.filter(item => item.indexOf(symbols) > -1);
//   }
//    console.log(filterItems("!"));
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") => // => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []




// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// function isDivisible(num1, num2){
//   if (num1 % num2 === 0)
//   return "👍 true";
//   else return "👎 false";
// }
// test data
// => true
//console.log(isDivisible(9,3));//true
//console.log(isDivisible(15, 4));//false
//console.log(isDivisible(20, 5));//20

// ANOTHER WAY TO SOLVE 👇

// const num1 = 15;
// const num2 = 4;

// const isDivisible = num1 % num2;
// console.log(isDivisible);

// if (isDivisible === 0){
//   console.log("👍 true"); 
// } else {
//   console.log("👎 false");
// }
  