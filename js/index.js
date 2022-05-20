console.log('connected');

// let btn1= document.getElementById('btn1');
// let btn2= document.getElementById('btn2');
// let btn3= document.getElementById('btn3');
// let btn4= document.getElementById('btn4');
// let btn5= document.getElementById('btn5');
// let btn6= document.getElementById('btn6');
// let btn7= document.getElementById('btn7');
// let btn8= document.getElementById('btn8');
// let btn9= document.getElementById('btn9');
// let btn0= document.getElementById('btn0');
// let btnAdd = document.getElementById('btnAdd');
// let btnSub= document.getElementById('btnSub');
// let btnDiv= document.getElementById('btnDiv');
// let btnMod= document.getElementById('btnMod');
// let btnMul= document.getElementById('btnMul');
// let btnDot= document.getElementById('btnDot');

// function number1(num){
//     let btn1= document.getElementById('btn1');
//     console.log(btn1);
// }

// function calculate(e){
//     let newVar = document.getElementsByClassName("btn");
//     console.log(newVar);
//     console.log(e.target.value);
// }

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