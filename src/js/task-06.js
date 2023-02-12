const inputText = document.querySelector("#validation-input");
const inputLength = Number(inputText.dataset.length);

const inputValid = event => {
    if (event.currentTarget.value.length === inputLength) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    } else {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }
    
}

inputText.addEventListener("input", inputValid);

