// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = '';
    }
    display.textContent += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Function for square root
function squareRoot() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.textContent);
    if (currentValue >= 0) {
        display.textContent = Math.sqrt(currentValue);
    } else {
        display.textContent = 'Error';
    }
}

// Function for exponentiation (x^2)
function exponent() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.textContent);
    display.textContent = currentValue * currentValue;
}

// Function for sine (sin)
function sinFunction() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.textContent);
    display.textContent = Math.sin(currentValue);
}

// Function for cosine (cos)
function cosFunction() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.textContent);
    display.textContent = Math.cos(currentValue);
}

// Function for tangent (tan)
function tanFunction() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.textContent);
    display.textContent = Math.tan(currentValue);
}
