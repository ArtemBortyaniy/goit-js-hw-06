const btnDecrement = document.querySelector("[data-action='decrement']");
const getValue = document.querySelector("#value");
const btnIncrement = document.querySelector("[data-action='increment']");

let counterValue = 0;

const onBtnDecrement = (event) => {
    counterValue += event.width;
    getValue.textContent = counterValue;
}

const onBtnIncrement = (event) => {
    counterValue -= event.width;
    getValue.textContent = counterValue;
}

btnDecrement.addEventListener("click", onBtnDecrement);
btnIncrement.addEventListener("click", onBtnIncrement);

