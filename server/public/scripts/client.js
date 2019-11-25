$(document).ready(onClick);
//creating event listeners
function onClick() {
    console.log('burple');
    $('.js-add').on('click', addition);
    $('.js-subtract').on('click', subtraction);
    $('.js-multiply').on('click', multiply);
    $('.js-divide').on('click', divide);
    $('.js-clear').on('click', clear);
    $('.js-equals').on('click', equals);
};

let operation;
//creating event handlers
function addition(event) {
    operation = 'add';
    console.log('in addition', addition)
};

function subtraction(event) {
    operation = 'subtract';
    console.log('in subtraction', subtraction)
};

function multiply(event) {
    operation = 'multiply';
    console.log('in multiplication', multiply)
};

function divide(event) {
    operation = 'divide'
    console.log('in division', divide)
};

function clear(event) {
    $('.js-value1').val('')
    $('.js-value2').val('')
};

function equals(event) {
    equationObject = {
        equationInput1: $('.js-value1').val(),
        equationOperation: operation,
        equationInput2: $('.js-value2').val(),
    };
    console.log('equals', equals)
    saveEquation(equationObject);
};
// creating calls
function saveEquation(equationObject) {
    $.ajax({
        method: 'POST',
        url: 'api/answer',
        data: equationObject,
    })
    .then(function(response) {
        renderAnswer(response);
        history();
        console.log('in saveEquations', saveEquation)
    })
    .catch(function(err) {
        console.log('in err:', err);
    });
};

function history() {
    $.ajax({
        method: 'GET',
        url: 'api/history',
        
    })
};
//creating render
function renderAnswer(response) {
    const answer = $('.js-answer')
    answer.empty();
    answer.append(`${response.answer}`);
    console.log(response)
};