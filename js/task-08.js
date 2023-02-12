const form = document.querySelector(".login-form");
console.log(form);
const getValuefForm = event => {
    event.preventDefault();

    const { 
        elements: {email, password} 
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("All fields must be completed");
    }

    console.log(`${form.email.name}: ${email.value}\n\n${form.password.name}: ${password.value}`);
    event.currentTarget.reset();
}

form.addEventListener('submit', getValuefForm);

