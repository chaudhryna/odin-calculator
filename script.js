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
let receivedNum2 = false;
let result = 0;


function operate (num1, num2, operator) {
    if (operator === 'equals') {
        return num2;
    } else if (operator === 'add') {
        return num1 + num2;
    } else if (operator === 'subtract') {
        return num1 - num2;
    } else if (operator === 'multiply') {
        return num1 * num2;
    } else if (operator === 'divide') {
        if (num2 === 0) {
            alert("Snarky message");
        } else {
            return num1 / num2;
        }
    }
}

function addDecimal(decimal) {
	// if (!receivedNum2 || ) return;
	if (!display.textContent.includes('.')) {
		display.textContent += '.';
	}
}

function displayNum (element) {   
    if (display.textContent === '0' || receivedNum2) {
        display.textContent = element;
    } else {
        display.textContent += element;
    }
}

function changeDisplay(element) {
    if (num1 === 0) {
        num1 = Number(display.textContent);
        receivedNum2 = true;
    } else {
        num2 = Number(display.textContent);
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
    display.textContent = '0';
    num1 = 0;
    num2 = 0;
    operator = '';
    receivedNum2 = false;
    result = 0;
});
