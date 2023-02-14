const form = document.querySelector(".login-form");

const getFormValue = event => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        return alert("All fields must be completed");
    } else {
        const formData = {
            email,
            password,
        }
        console.log(formData);
        form.reset();
        event.currentTarget.reset();
    }
}

form.addEventListener('submit', getFormValue);
