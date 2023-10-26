let numOne = 0;
let numTwo = 0;
let operator = "";

const digits = document.querySelector("#digits");
for (let i = 1; i <= 9; i++) {
  let button = document.createElement("button");
  button.textContent = i;
  button.id = i;
  digits.appendChild(button);
}

function operate(numOne, numTwo, operator) {
  if (operator === "+") {
    return add(numOne, numTwo);
  } else if (operator === "-") {
    return subtract(numOne, numTwo);
  } else if (operator === "*") {
    return multiply(numOne, numTwo);
  } else {
    return divide(numOne, numTwo);
  }
}

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}
