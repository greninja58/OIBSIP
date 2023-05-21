let input = document.getElementById("input");
let result = document.getElementById("result");

function appendNumber(number) {
  input.value += number;
}

function calculateSqrt() {
  const expression = input.value;
  const sqrtResult = Math.sqrt(eval(expression));
  result.value = sqrtResult;
}

function appendOperator(operator) {
  input.value += operator;
}

function calculateFactorial() {
  const expression = input.value;
  const factorialResult = factorial(eval(expression));
  result.value = factorialResult;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function calculate() {
  const expression = input.value;

  // Validate the expression
  if (isValidExpression(expression)) {
    const calculatedResult = eval(expression);
    input.value="";
    result.value = calculatedResult;
    
  } else {
    result.value = "Invalid Expression";
   
  }
}

function isValidExpression(expression) {
  // Regular expression to validate the expression
  const validExpressionRegex = /^[-+*/%()\d\s.]+$/;

  // Check if the expression matches the valid expression pattern
  return validExpressionRegex.test(expression);
}

function clearScreen() {
  input.value = "";
  result.value = "";
}

function appendDecimal() {
  if (input.value === "" || isNaN(input.value.slice(-1))) {
    input.value += "0.";
  } else if (!input.value.includes(".")) {
    input.value += ".";
  }
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

// Rest of your existing code
