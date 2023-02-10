const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const inputRange = (event ) => {
    console.log(event.currentTarget.value);
    // event.currentTarget.value;
    return spanText.style.fontSize = event.currentTarget.value;
}

input.addEventListener('input', inputRange);

spanText.style.fontSize = inputRange(input);

