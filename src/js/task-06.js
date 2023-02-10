const inputText = document.querySelector("#validation-input");

const inputValid = event => {
    if (event.currentTarget.value.length > 6) {
        return inputText.id = 'validation-input.invalid';
    }

    return inputText.id = 'validation-input.valid';
}

inputText.addEventListener("input", inputValid);

