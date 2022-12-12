let html = document.querySelector("html")
let counter = document.getElementById("count");

counter.innerHTML = localStorage.getItem('value');

let count = 0;

html.addEventListener("click", function () {
    localStorage.setItem("value", count++)
    counter.innerHTML = localStorage.getItem("value")
    html.style.backgroundColor = "crimson";
    html.style.color = "blue";
    counter.style.fontSize="25px";
})


