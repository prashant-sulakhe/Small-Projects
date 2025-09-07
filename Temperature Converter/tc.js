const tempInput = document.getElementById("tempInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function tempConversion(){
    if(toFahrenheit.checked){
        //result.textContent = "Fahrenheit";
        temp = Number(tempInput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }
    else if(toCelsius.checked){
        //result.textContent = "Celsius";
        temp = Number(tempInput.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " °C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}