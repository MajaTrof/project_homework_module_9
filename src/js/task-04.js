const refs = {
    addBtn: document.querySelector('button[data-action="increment"]'),
    deductBtn: document.querySelector('button[data-action="decrement"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

function incrementValue() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

function decrementValue() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

refs.addBtn.addEventListener('click', incrementValue);
refs.deductBtn.addEventListener('click', decrementValue);


