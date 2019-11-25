$(document).ready(onClick);
//creating event listeners
function onClick() {
    console.log('burple');
    $('.js-add').on('click', addition);
    $('.js-subtract').on('click', subtract);
    $('.js-multiply').on('click', multiply);
    $('.js-divide').on('click', divide);
    $('.js-clear').on('click', clear);
    $('.js-equals').on('click', equals);
};

let operation;
//creating event handlers
function addition(event) {
    operation = 'add';
};

function subtract(event) {
    operation = 'subtract';
};

function multiply(event) {
    operation = 'multiply';
};

function divide(event) {
    operation = 'divide'
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
    const answer = $('.js-equals')
    answer.empty();
    answer.append('${response.answer}')
};