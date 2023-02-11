const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const inputRange = (event ) => {
    return spanText.style.fontSize = event.currentTarget.value + "px";
}

const style = input.addEventListener('input', inputRange);


    //Второе решение 

// const style = input.addEventListener('input', function() {
//     spanText.style.fontSize = input.value + "px";
// });
