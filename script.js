let result = document.getElementById('result');
let calculation = '';

function appendToResult(value) {
    calculation += value;
    result.value = calculation;
}

function calculateResult() {
    try {
        calculation = eval(calculation);
        result.value = calculation;
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    calculation = '';
    result.value = '';
}
