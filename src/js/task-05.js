const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("h1 span");

const noInputValue = event => {
    outputName.textContent = event.currentTarget.value;

    if(outputName.textContent === "") {
        return outputName.textContent = "Anonymous";
    }
}

inputName.addEventListener("input", noInputValue);


