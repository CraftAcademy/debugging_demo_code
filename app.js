const inputsAreEmpty = () => {
  if (isNaN(getNumber(1)) || isNaN(getNumber(2))) {
    return true;
  } else {
    return false;
  }
}
const getNumber = index => {
  return parseFloat(inputs[index - 1].value)
}

const updateLabel = () => {
  let number1 = getNumber(1);
  let number2 = getNumber(2);
  console.log(number1)
  console.log(number2);
  var sum = number1 + number2;
  label.textContent = number1 + ' + ' + number2 + ' = ' + sum;
}

const onButtonClick = () => {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateLabel();
}

let label = document.getElementById('results');
let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
button.addEventListener('click', onButtonClick);