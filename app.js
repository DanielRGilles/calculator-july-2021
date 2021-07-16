
import { add, subtract, multiply, divide} from '../utils.js';

//divide, multiply, subtract

const addnumEl1 = document.getElementById('add-input-num1')
const addnumEl2 = document.getElementById('add-input-num2')
const addNumElresult = document.getElementById('add-result')
const addBtnEl = document.getElementById('btn')

;

addBtnEl.addEventListener('click', () => {
    const firstValue = addnumEl1.value;
    const secondValue = addnumEl2.value;

    const sum = add(firstValue, secondValue);

    addNumElresult.textContent = sum;
});

const subnumEl1 = document.getElementById('sub-input-num1')
const subnumEl2 = document.getElementById('sub-input-num2')
const subNumElresult = document.getElementById('sub-result')
const subBtnEl = document.getElementById('sub-btn')

;

subBtnEl.addEventListener('click', () => {
    const firstValue = subnumEl1.value;
    const secondValue = subnumEl2.value;

    const sum = subtract(firstValue, secondValue);

    subNumElresult.textContent = sum;
});

const divinumEl1 = document.getElementById('divi-input-num1')
const divinumEl2 = document.getElementById('divi-input-num2')
const diviNumElresult = document.getElementById('divi-result')
const diviBtnEl = document.getElementById('divi-btn')

;

diviBtnEl.addEventListener('click', () => {
    const firstValue = divinumEl1.value;
    const secondValue = divinumEl2.value;

    const sum = divide(firstValue, secondValue);

    diviNumElresult.textContent = sum;
});
const multinumEl1 = document.getElementById('multi-input-num1')
const multinumEl2 = document.getElementById('multi-input-num2')
const multiNumElresult = document.getElementById('multi-result')
const multiBtnEl = document.getElementById('multi-btn')

;

multiBtnEl.addEventListener('click', () => {
    const firstValue = multinumEl1.value;
    const secondValue = multinumEl2.value;

    const sum = multiply(firstValue, secondValue);

    multiNumElresult.textContent = sum;
});
