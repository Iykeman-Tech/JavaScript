/*var op = prompt("Enter operator (+,-,*,/,%)");
var num1 = parseFloat(prompt("Enter First Number"));
var num2 = parseFloat(prompt("Enter Second Number"));
var output;

if(op == "+"){
    output = num1 + num2;
}
else if(op == "-"){
    output = num1 - num2;
}
else if(op == "*"){
    output = num1 * num2;
}
else if(op == "/"){
    output = num1/num2;
}
else if(op == "%"){
    output = num1%num2;
}
else{
    alert("Wrong Input");
}

window.alert("The result is"+" "+ output);*/

function display(val){
    document.getElementById("display").value += val;
}

function solve(){
    var x = document.getElementById("display").value;
    var y = eval(x);
    document.getElementById("display").value = y;
}

function clr(){
    var cl = document.getElementById("display").value = " ";
}