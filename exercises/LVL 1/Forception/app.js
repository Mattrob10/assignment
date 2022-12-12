// function nonMutatingConcat(original, attach) {
//   // Only change code below this line

//  return original.concat(attach);
//   // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingConcat(first, second);

// Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:

// function forception(people, alphabet){
//   // your code here
// }
// // Output:
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]





let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetArray = alphabet.toUpperCase().split("");

const result = []; 

for (let i = 0; i < people.length; i++){
    result.push(people[i]);
        for (let j = 0; j < alphabetArray.length; j++){
           result.push(alphabetArray[j]);
}
}

console.log(result)

//how do I get ONLY 26 entries?!?

