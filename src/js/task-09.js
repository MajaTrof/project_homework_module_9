const changeBtn = document.querySelector(".change-color");
const spanBtn = document.querySelector(".color");

changeBtn.addEventListener('click', getRandomColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomColor() {
  document.body.style.backgroundColor = getRandomHexColor(); 
  spanBtn.textContent = getRandomHexColor();
}