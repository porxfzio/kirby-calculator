var boop = new Audio();
boop.src = "sound-fx/shooting-sound-fx-159024.mp3"

var joop = new Audio();
joop.src = "sound-fx/cartoon-jump-6462.mp3"

var ting = new Audio();
ting.src = "sound-fx/correct-2-46134.mp3"

let currentInput = "";
let currentOperator = "";
let result = "";


function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("screen").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("screen").value = "";
}

function calculate() {
    try {
        result = eval(currentInput);
        document.getElementById("screen").value = result; // Change "display" to "screen" here
        currentInput = result;
    } catch (error) {
        document.getElementById("screen").value = "ano teh?";
    }
}

let isClearMode = false; // Initially, it's not in clear mode

function toggleEqualClear() {
    if (isClearMode) {
        clearDisplay();
    } else {
        calculate();
    }
    isClearMode = !isClearMode; // Toggle the mode
}
