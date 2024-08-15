let display = document.getElementById('display');
let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    display.innerText = previousInput + ' ' + operation;
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operation = null;
    previousInput = '';
    display.innerText = result;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.innerText = '0';
}
