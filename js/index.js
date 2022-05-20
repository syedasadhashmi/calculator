console.log('connected');

let showOutput = document.getElementById('display-screen');
console.log(showOutput);
function functionVal(num){
    console.log(num);
    showOutput.value += num;
}

function calculateVal(){
    console.log(showOutput.value);
    let result= eval(showOutput.value);
    showOutput.value = result;    
    
}
function clearFunc(){
    showOutput.value = " ";
}
function sliceFunc(){
    let del = showOutput.value;
    console.log(del.slice(0,-1));
    let newVal = del.slice(0,-1);
    showOutput.value = newVal;
}