const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const teninButton = document.getElementById("tenincrease");
const decButton = document.getElementById("decrease");
const tendeButton = document.getElementById("tendecrease");
const resetButton = document.getElementById("reset");

let count = 0;
number.textContent = count;

function increaseCount() {
 count++; // count = count + 1
 number.textContent = count; // 숫자 변화 반영
 
}

function tenincreaseCount() {
 count = count + 10;
 number.textContent = count;
}

function decreaseCount() {
 count--;
 number.textContent = count;
}

function tendecreaseCount() {
 count = count - 10;
 number.textContent = count;
}

function resetcount() {
 count = 0;
 number.textContent = count;
}

incButton.addEventListener("click",increaseCount);
teninButton.addEventListener("click",tenincreaseCount);
decButton.addEventListener("click",decreaseCount);
tendeButton.addEventListener("click",tendecreaseCount);
resetButton.addEventListener("click",resetcount);