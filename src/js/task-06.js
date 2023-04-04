const input = document.querySelector("#validation-input");

input.addEventListener('blur', checkInput);

function checkInput() {
    if (input.value.length === +input.dataset.length) {
        console.log(input.value.length);
        input.classList.add('valid');
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
    }
}