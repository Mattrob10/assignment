let goombasCount = document.getElementById('goombas-count');
let goombasPrice = document.getElementById('goombas-price');

let bobombsCount = document.getElementById('bobombs-count');
let bobombsPrice = document.getElementById('bobombs-price');

let cheepsCount = document.getElementById('cheeps-count');
let cheepsPrice = document.getElementById('cheeps-price');

let totalPrice = document.getElementById('total-price');
let calculate = document.getElementById('calculate');



function total(event){
  event.preventDefault();

  let goombasTotal = parseInt(goombasCount.value) * 5;
  goombasPrice.value = goombasTotal + " Coins";

  let bobombsTotal = parseInt(bobombsCount.value) * 7;
  bobombsPrice.value = bobombsTotal + " Coins";

  let cheepsTotal = parseInt(cheepsCount.value) * 11;
  cheepsPrice.value = cheepsTotal + " Coins";

  totalPrice.value = goombasTotal + bobombsTotal + cheepsTotal + " Coins";
};

calculate.addEventListener("click", total)
