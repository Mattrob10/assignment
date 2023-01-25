

// var readline = require("readline-sync");
// var input = readline
//   .question("What phrase would you like to encrypt? ")
//   .toLowerCase();
// var shift = parseInt(
//   readline.question("How many letters would you like to shift? ")
// );

// const cipher = (str, num) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
//   return str.replace(
//     /[a-z]/g,
//     (letter) => alphabet[alphabet.indexOf(letter) + num]
//   );
// };

// console.log(cipher(input, shift));


const alphabet =[
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z'
]

// input = "hello"
// h = 7
// e = 4
// l = 11

function abcPosition(input, shift) {
  let abcStr = ""
  for(i = 0; i < input.length; i++ ){
    let newIndex = alphabet.findIndex(function(currentValue){
        if(currentValue === input[i])
        return true
    })
    
    /*
    console.log("***********************************************")
    console.log("CURRENT LETTER: ", input[i])
     console.log("index of current letteR", newIndex)
     console.log("shift value: ", shift)
     console.log("shift+index", shift+newIndex)
     console.log("new letter: ", alphabet[shift+newIndex])
     console.log("*************************************************")
    */
    if(newIndex === -1){
      abcStr = abcStr + " "
    }
    else {
      abcStr = abcStr +  alphabet[shift+newIndex]
    }

  }
return abcStr
}
console.log(abcPosition("hello", 2))
console.log(abcPosition("i am", 2))
console.log(abcPosition("v school is awesome!", 11))