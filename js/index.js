
let showOutput = document.getElementById('display-screen');
function functionVal(num) {
    showOutput.value += num;
}

function calculateVal() {
    let result = eval(showOutput.value);
    showOutput.value = result;
}
function clearFunc() {
    showOutput.value = " ";
}
function sliceFunc() {
    let del = showOutput.value;
    let newVal = del.slice(0, -1);
    showOutput.value = newVal;
}