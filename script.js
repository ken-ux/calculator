const digitsContainer = document.querySelector("#digits");

const operatorsContainer = document.querySelector("#operators");
const operatorSymbols = ["+", "-", "*", "/", "="];

const resultField = document.querySelector("#result");
const clearButton = document.querySelector("#clear");

let storedCalculation = {
  numOne: { value: "", chosen: false },
  numTwo: { value: "", chosen: false },
  operator: "",
};

// Create digit buttons
for (let i = 1; i <= 9; i++) {
  let button = document.createElement("button");
  button.textContent = i;
  button.id = i;
  button.addEventListener("click", () => storeDigits(button.id));
  digitsContainer.appendChild(button);
}

// Create operator buttons
for (let i = 0; i < operatorSymbols.length; i++) {
  let button = document.createElement("button");
  button.textContent = operatorSymbols[i];
  button.id = operatorSymbols[i];
  if (operatorSymbols[i] === "=") {
    button.addEventListener("click", operate);
  } else {
    button.addEventListener("click", () => storeOperator(button.id));
  }
  operatorsContainer.appendChild(button);
}

clearButton.addEventListener("click", () => clearResult());

function storeDigits(num) {
  if (!storedCalculation.numOne.chosen) {
    storedCalculation.numOne.value += num;
    displayResult(storedCalculation.numOne.value);
  } else if (!storedCalculation.numTwo.chosen) {
    storedCalculation.numTwo.value += +num;
    displayResult(storedCalculation.numTwo.value);
  }
}

function storeOperator(oper) {
  if (!storedCalculation.numOne.chosen) {
    storedCalculation.numOne.chosen = true;
  } else if (!storedCalculation.numTwo.chosen) {
    storedCalculation.numTwo.chosen = true;
  }
  storedCalculation.operator = oper;
  console.log(storedCalculation);
}

function operate() {
  let calculation = 0;
  let operator = storedCalculation.operator;
  let numOne = storedCalculation.numOne.value;
  let numTwo = storedCalculation.numTwo.value;

  if (operator === "+") {
    calculation += add(numOne, numTwo);
  } else if (operator === "-") {
    calculation += subtract(numOne, numTwo);
  } else if (operator === "*") {
    calculation += multiply(numOne, numTwo);
  } else {
    calculation += divide(numOne, numTwo);
  }
  displayResult(calculation);
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

function displayResult(num) {
  resultField.textContent = num;
}

function clearResult() {
  storedCalculation.operator = "";
  storedCalculation.numOne.value = "";
  storedCalculation.numTwo.value = "";
  storedCalculation.numOne.chosen = false;
  storedCalculation.numTwo.chosen = false;
  displayResult(0);
}
