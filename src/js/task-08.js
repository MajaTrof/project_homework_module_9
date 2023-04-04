const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const mail = formEl.email.value;
    const password = formEl.password.value;

    if (mail === '' || password === '') {
        alert('oops');
        return;
    }
    const formElobj = {
        email: mail,
        password: password
    };

    console.log(formElobj);

    form.reset();
}
