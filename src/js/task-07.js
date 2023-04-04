const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", changeText);

function changeText() {
    text.style.fontSize = input.value + 'px';
  }