const refs = {
	valueNumber: document.querySelector("input"),
	createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  box: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createOnBox);
refs.destroyBtn.addEventListener("click", destroyOnBox);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createOnBox() {

  let i = 1;
  do {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = 30 + i * 10 + "px";
    divEl.style.height = 30 + i * 10 + "px";
  
    refs.box.appendChild(divEl);
    
    i += 1;
  } while (i <= +refs.valueNumber.value);
 

}

function destroyOnBox() {
  refs.box.innerHTML = '';
}

