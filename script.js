// script.js
let displayValue = '0';

// Update display
function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

// Append numbers to display
function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

// Append operators to display
function appendOperator(operator) {
    const lastChar = displayValue.slice(-1);
    if (!['+', '-', '*', '/'].includes(lastChar)) {
        displayValue += operator;
        updateDisplay();
    }
}

// Clear display
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

// Delete last character
function deleteLast() {
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}

// Calculate result
function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}
