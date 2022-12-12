document.getElementById("btn").addEventListener("mouseenter", mouseEnter);
document.getElementById("btn").addEventListener("mousedown", mouseDown);
document.getElementById("btn").addEventListener("click", offClick);
document.getElementById("btn").addEventListener("dblclick", ondblclick);
document.querySelector("body").addEventListener("wheel", onwheel);
document.getElementById("colorInputText").addEventListener("changeColor", changeColor);


function mouseEnter() {
  document.getElementById("btn").style.backgroundColor = "blue";
}

function mouseDown() {
  document.getElementById("btn").style.backgroundColor = "red";
}

function offClick(){
  document.getElementById("btn").style.backgroundColor ="yellow";
}

function ondblclick(){
  document.getElementById("btn").style.backgroundColor ="green";
}
function onwheel(){
  document.querySelector("body").style.backgroundColor ="orange";
}

function changeColor() {
  let color = document.getElementById("colorInputText").value;
  document.body.style.backgroundColor = color;
  document.getElementById("btn").style.backgroundColor = color;
}



