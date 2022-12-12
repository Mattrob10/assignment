function addNum() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var answer = document.getElementById("answer");
  answer.value = num1 + num2;
}

function subtract(){
  var sub1 = parseInt(document.getElementById("sub1").value);
  var sub2 = parseInt(document.getElementById("sub2").value);
  var answer = document.getElementById("subAnswer");
  answer.value = sub1 - sub2;
}

function multiply() {
  var num1 = parseInt(document.getElementById("mul1").value);
  var num2 = parseInt(document.getElementById("mul2").value);
  var answer = document.getElementById("mulAnswer");
  answer.value = num1 * num2;
}