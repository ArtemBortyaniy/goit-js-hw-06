function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("[type='number']");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById('boxes');

const createBoxes = () =>{
  let size = 20;
  const boxArr =[];
  const error = `<div style ='color: red'>Enter a number from ${input.min} to ${input.max}</div>`;

  if (Number(input.value) >= Number(input.min) && Number(input.value) <= Number(input.max)) {
    for(let i = 0; i < input.value; i += 1) {
      size += 10;
      boxArr.push(`<div class ='elem' style='height: ${size}px; background-color: ${getRandomHexColor()}; width: ${size}px'></div>`);
    }
  
    boxesEl.insertAdjacentHTML("beforeend", boxArr.join(''));
  }else {
    boxesEl.insertAdjacentHTML("beforeend", error);
  }
}

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);











