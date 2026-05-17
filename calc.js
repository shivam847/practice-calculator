const display = document.getElementById("display");

let isResult = false;

function appendValue(value) {

 
    if (isResult && !isNaN(value)) {
        display.value = "";
    }

    isResult = false;
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
    isResult = true;
}