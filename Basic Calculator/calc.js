const display = document.getElementById('display');

function appendValue(input) {
    display.value += input;
}

function allClear() {
    display.value = " ";
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
        if (display.value == "Infinity"){
            display.value = "Zero Error";
        }
    } catch(error) {
        display.value = 'Error';
    }
}