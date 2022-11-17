// Header and Text 
const headerText = document.getElementById("header");
headerText.innerText = "JAVASCRIPT Made This!";
headerText.style.fontSize = "30px";
headerText.style.textAlign = "center";
headerText.style.fontWeight= "500";
headerText.style.color = "#0946fd";
headerText.style.margin= "20px";
headerText.innerHTML += "<p class =name> Matthew Robinson <span> wrote the Javascript</p>";
headerText.querySelector(".name").style.fontSize = "25px";
const main = document.getElementById("main");
main.style.backgroundColor = " #efefef";
// Messages Text Input
var messages = document.querySelector(".messages");
var messageText = document.querySelectorAll(".message");

messageText[0].textContent ="Good Morning!";
messageText[1].textContent ="Morning 🥱 Coding already?";
messageText[2].textContent ="🤣 everyday at 8AM";
messageText[3].textContent ="Maaaannn, you make me look bad 😤";

// CLEAR BUTTON
var clearButton = document.getElementById("clear-button");
function clear(){
    messages.innerHTML = ""
}

clearButton.addEventListener("click", clear);

// CHAT MESSAGE INPUT
let i = 0
function userInput(event){
    event.preventDefault()
    var newMessage = document.getElementById("input").value;
    if (i % 2 === 0) {
      document.querySelector(".messages").innerHTML += "<div class='message left'>" + newMessage + "</div>" ; 
      } else { document.querySelector(".messages").innerHTML += "<div class='message right'>" + newMessage + "</div>"};
      themeFunction()
      document.getElementById("input").value = ""
}

var form = document.message
form.addEventListener("submit", userInput)

var submitButton = document.getElementById("send")

var theme = document.getElementById("theme-drop-down")
theme.addEventListener("change", themeFunction)

function themeFunction(){
  var messageText = messages.querySelectorAll("div.message");
  console.log(messageText.length)
    if (theme.value == "theme-one"){
      for (i = 0; i <messageText.length; i++){
          if ( i % 2 === 0 ) {
            messageText[i].style.backgroundColor = "#5577dd";
            messageText[i].style.color = "white";
          } else if (i % 2 === 1){
              messageText[i].style.backgroundColor = "#984e23";
              messageText[i].style.color = "white";
          }
      }
    } else if (theme.value == "theme-two"){
      for (i = 0; i < messageText.length; i ++){
        if (i % 2 === 0 ){
          messageText[i].style.backgroundColor = "black";
            messageText[i].style.color = "white";
        } else if (i % 2 === 1){
          messageText[i].style.backgroundColor = "crimson";
          messageText[i].style.color = "white";
        }
      }
    }
  }
