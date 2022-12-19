const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const btns = document.querySelectorAll('.btn');
const equals = document.querySelector('.equals');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const backspace = document.querySelector('.backspace');

let num1 = 0;
let num2 = 0;
let operator = '';
let receivedNum2 = false;
let result = 0;


function operate (num1, num2, operator) {
    if (operator === 'add') {
        return num1 + num2;
    } else if (operator === 'subtract') {
        return num1 - num2;
    } else if (operator === 'multiply') {
        return num1 * num2;
    } else if (operator === 'divide') {
        if (num2 === 0) {
            alert("Sorry, you can't divide by 0");
        } else {
            return num1 / num2;
        }
    } else if (operator === 'equals') {
        return num2;
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
        console.log(num1);
        receivedNum2 = true;
    } else {
        num2 = Number(display.textContent);
        console.log(num2);
        result = operate(num1, num2, operator);
        display.textContent = result.toString();
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

decimal.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
		display.textContent += '.';
	}
})

backspace.addEventListener('click', () => {
    if (display.textContent.length > 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
})

clear.addEventListener('click', () => {
    display.textContent = '0';
    num1 = 0;
    num2 = 0;
    operator = '';
    receivedNum2 = false;
    result = 0;
});
