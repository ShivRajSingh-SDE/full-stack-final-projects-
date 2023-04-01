// Define variables for the calculator
let num1 = 0;
let num2 = 0;
let operator = "";

// Function to perform calculations
function calculate() {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = 0;
  }
  return result;
}

// Function to handle button clicks
function handleClick(value) {
  // If the value is a number, add it to the appropriate variable
  if (!isNaN(value)) {
    if (operator === "") {
      num1 = num1 * 10 + parseInt(value);
      document.getElementById("result").innerHTML = num1;
    } else {
      num2 = num2 * 10 + parseInt(value);
      document.getElementById("result").innerHTML = num2;
    }
  } else {
    // If the value is an operator, set the operator variable
    operator = value;
  }
}

// Function to handle the equals button click
function handleEquals() {
  // Calculate the result and display it
  let result = calculate();
  document.getElementById("result").innerHTML = result;

  // Reset the variables
  num1 = result;
  num2 = 0;
  operator = "";
}

// Function to handle the clear button click
function handleClear() {
  // Reset the variables and display 0
  num1 = 0;
  num2 = 0;
  operator = "";
  document.getElementById("result").innerHTML = 0;
}

function play(){
  const audio = new Audio("button.mp3");
  audio.play();
}