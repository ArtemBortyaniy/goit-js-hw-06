// const form = document.querySelector(".login-form");

// const getFormValue = event => {
//     event.preventDefault();

//     const formElements = event.currentTarget.elements;

//     const email = formElements.email.value;
//     const password = formElements.password.value;

//     if (email === "" || password === "") {
//         return alert("All fields must be completed");
//     } else {
//         const formData = {
//             email,
//             password,
//         }
//         console.log(formData);
//         event.currentTarget.reset();
//     }
// }

// form.addEventListener('submit', getFormValue);

const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', checkSubmit);

function checkSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all fields');
  }
  
  const result = { email: email.value, password: password.value };

  console.log(result);

  event.currentTarget.reset();
}
