const number = document.getElementById("counting-num");
const inc10Button = document.getElementById("increase10");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const dec10Button = document.getElementById("decrease10");
const reset = document.getElementById("reset");


let count = 0;
number.textContent = count;

function increase10Count() {
    count = count + 10;
    showNumber();
}

function increaseCount() {
    count++; // count = count + 1
    showNumber();
}

function decreaseCount() {
    count--;
    showNumber();
}

function resetCount() {
    count = 0;
    showNumber();
}

function decrease10Count() {
    count = count - 10;
    showNumber();
}

   
function showNumber(){
    number.style.color = `rgba(${count*10},${count*(-10)},0)`;
    number.textContent = count;
}

incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
reset.addEventListener("click", resetCount);
inc10Button.addEventListener("click",increase10Count);
dec10Button.addEventListener("click",decrease10Count);