const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const btns = document.querySelectorAll('.btn');
const equals = document.querySelector('.equals');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const opsArray = ['add', 'subtract', 'multiply', 'divide'];
let num1 = 0;
let num2 = 0;
let operator = '';

const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    if (num2 === 0) {
        alert('Snarky message')
    } else {
        return num1 / num2
    }
};

function operate (num1, num2, operator) {
    if (operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'multiply') {
        return multiply(num1, num2);
    } else if (operator === 'divide') {
        return divide(num1, num2);
    }
}

function displayNum (element) {   
    display.textContent += element;
}

function changeDisplay(element) {
    if (num1 === 0) {
        num1 = Number(display.textContent);
        display.textContent = '';
    } else {
        num2 = Number(display.textContent);
        display.textContent = '';
        result = operate(num1, num2, operator);
        num1 = result;
        let numStr = result.toString();
        displayNum(numStr);
    }
    operator = element.id;
}

// Event listeners
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        displayNum(e.target.textContent);
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        changeDisplay(e.target);
    })
})

clear.addEventListener('click', () => {
    display.textContent = '';
    num1 = 0;
    num2 = 0;
    operator = '';
});
