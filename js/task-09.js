function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color"); 
const span = document.querySelector(".color");

const changeColorBtn = () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}

btn.addEventListener('click', changeColorBtn);
