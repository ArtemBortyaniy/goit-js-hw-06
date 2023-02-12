function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("[type='number']");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById('boxes');

console.log(input.max);

const createBoxes = () =>{
  let size = 20;
  const boxArr =[];
  const error = `<div style ='color: red'>Enter a number from ${input.min} to ${input.max}</div>`;

  if (Number(input.value) >= Number(input.min) && Number(input.value) <= Number(input.max)) {
    for(let i = 0; i < input.value; i += 1) {
      size += 10;
      boxArr.push(`<div class ='elem' style='height: ${size}px; background-color: ${getRandomHexColor()}; width: ${size}px'></div>`);
    }
  
    boxesEl.insertAdjacentHTML("beforebegin", boxArr.join(''));
  }else {
    boxesEl.insertAdjacentHTML("beforebegin", error);
  }
}

const destroyBoxes = () => {
  location.reload();
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);











