const refs = {
	nameInput: document.querySelector("#name-input"),
	nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
	if (refs.nameInput === "") {
		refs.nameOutput.textContent = "Anonimous";
	}
	refs.nameOutput.textContent = event.currentTarget.value;
}
