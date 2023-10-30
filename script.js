const numsContainer = document.querySelector("#nums");
const operatorsContainer = document.querySelector("#operators");
const operatorSymbols = ["+", "-", "*", "/", "="];
const resultField = document.querySelector("#result");
const clearButton = document.querySelector("#clear");

let storedCalculation = {
  numOne: { value: "", chosen: false },
  numTwo: { value: "" },
  operator: "",
};

clearButton.addEventListener("click", () => clearResult());

// Create number buttons
for (let i = 0; i <= 9; i++) {
  let button = document.createElement("button");
  button.textContent = i;
  button.id = i;
  button.addEventListener("click", () => storeNum(button.id));
  numsContainer.appendChild(button);
}

// Create operator buttons
for (let i = 0; i < operatorSymbols.length; i++) {
  let button = document.createElement("button");
  button.textContent = operatorSymbols[i];
  button.id = operatorSymbols[i];
  button.addEventListener("click", () => storeOperator(button.id));
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

function storeOperator(operator) {
  if (!storedCalculation.numOne.chosen) {
    storedCalculation.numOne.chosen = true;
    storedCalculation.operator = operator;
  } else if (
    storedCalculation.numTwo.value !== "" &&
    storedCalculation.operator !== ""
  ) {
    // do calculation
    operate(
      storedCalculation.operator,
      storedCalculation.numOne.value,
      storedCalculation.numTwo.value
    );
    if (operator !== "=") {
      storedCalculation.operator = operator;
    } else {
      storedCalculation.operator = "";
    }
  } else if (storedCalculation.operator === "") {
    storedCalculation.operator = operator;
  } else {
    alert("Please choose a second number first!");
  }
}

function operate(operator, numOne, numTwo) {
  // Convert strings into numbers
  numOne = Number(numOne);
  numTwo = Number(numTwo);

  if (operator === "=") {
    return operate(storedCalculation.operator, numOne, numTwo);
  } else if (operator === "+") {
    updateStoredCalculation(add(numOne, numTwo));
  } else if (operator === "-") {
    updateStoredCalculation(subtract(numOne, numTwo));
  } else if (operator === "*") {
    updateStoredCalculation(multiply(numOne, numTwo));
  } else if (operator === "/") {
    updateStoredCalculation(divide(numOne, numTwo));
  }
}

function updateStoredCalculation(num) {
  storedCalculation.numOne.value = num;
  storedCalculation.numOne.chosen = true;
  storedCalculation.numTwo.value = "";
  storedCalculation.operator = "";
  resultField.textContent = num;
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

function clearResult() {
  storedCalculation.numOne.value = "";
  storedCalculation.numOne.chosen = false;
  storedCalculation.numTwo.value = "";
  storedCalculation.operator = "";
  resultField.textContent = 0;
}
