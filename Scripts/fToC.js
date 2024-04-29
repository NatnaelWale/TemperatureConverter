"use strict";

window.onload = init;

const onConvertBtnClicked = document.getElementById("submitFvalue");
const onResetBtnClicked = document.getElementById("resetBtn");

function init() {

 onConvertBtnClicked.onclick = convertFtoC;
 
};

function convertFtoC() {
    var fInput = document.getElementById("fahrenheitValue").value;
    if (isNaN(fInput)) {
       document.getElementById("cResult").innerHTML = "Please input a valid number!";
       return;
    }
    var  result = (fInput - 32 ) / 1.8;
    document.getElementById("cResult").innerHTML = result.toFixed(2) + " degree Celsius!";

    onResetBtnClicked.onclick = resetInputFields;
    function resetInputFields() {
        document.getElementById("fahrenheitValue").value = "";
        document.getElementById("cResult").innerHTML = "";
    }
}

