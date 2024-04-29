"use strict";

window.onload = init;

const onConvertBtnClicked = document.getElementById("submitCvalue");
const onResetBtnClicked = document.getElementById("resetBtn");

function init() {

 onConvertBtnClicked.onclick = convertCtoF;
};

function convertCtoF() {
    var cInput = document.getElementById("celsiusValue").value;
    if (isNaN(cInput)) {
       document.getElementById("fResult").innerHTML = "Please input a valid number!";
       return;
    }

    var  result = (cInput * 1.8 ) + 32;
    document.getElementById("fResult").innerHTML = result.toFixed(2) + " degree Fahrenheit!";

    onResetBtnClicked.onclick = resetInputFields;
    function resetInputFields() {
        document.getElementById("celsiusValue").value = "";
        document.getElementById("fResult").innerHTML = "";
    }

}