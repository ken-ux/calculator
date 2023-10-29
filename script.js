const digitsContainer = document.querySelector("#digits");
const operatorsContainer = document.querySelector("#operators");
const operatorSymbols = ["+", "-", "*", "/", "="];
const resultField = document.querySelector("#result");
const clearButton = document.querySelector("#clear");

let storedCalculation = {
  numOne: { value: "", chosen: false },
  numTwo: { value: "" },
  operator: "",
  display: "",
};

clearButton.addEventListener("click", () => clearResult());

// Create digit buttons
for (let i = 1; i <= 9; i++) {
  let button = document.createElement("button");
  button.textContent = i;
  button.id = i;
    button.addEventListener("click", () => storeNum(button.id));
  digitsContainer.appendChild(button);
}

// Create operator buttons
for (let i = 0; i < operatorSymbols.length; i++) {
  let button = document.createElement("button");
  button.textContent = operatorSymbols[i];
  button.id = operatorSymbols[i];
  //   if (operatorSymbols[i] === "=") {
  //     button.addEventListener("click", operate);
  //   } else {
  //     button.addEventListener("click", () => storeOperator(button.id));
  //   }
  operatorsContainer.appendChild(button);
}

function storeNum(num) {
    if (storedCalculation.numOne.chosen === false) {
        storedCalculation.numOne.value += num;
        resultField.textContent = storedCalculation.numOne.value;
    } else {
        storedCalculation.numTwo.value += num;
        resultField.textContent = storedCalculation.numTwo.value;
    }
}

function operate(operator, numOne, numTwo) {
  if (operator === "+") {
    return add(numOne, numTwo);
  } else if (operator === "-") {
    return subtract(numOne, numTwo);
  } else if (operator === "*") {
    return multiply(numOne, numTwo);
  } else if (operator === "/") {
    return divide(numOne, numTwo);
  } else {
    console.log("Invalid operator");
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

function displayResult(num) {
  resultField.textContent = num;
}

function clearResult() {
    storedCalculation.numOne.value = "";
    storedCalculation.numOne.chosen = false;
    storedCalculation.numTwo.value = "";
    storedCalculation.operator = "";
    storedCalculation.display = "";
    resultField.textContent = 0;
}