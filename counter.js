const x = document.querySelector("num");

let value = 0;
function add(){
    value += 1;
    num.textContent = value; 
}

function sub(){
    value -= 1;
    num.textContent = value;
}

function reset(){
    value = 0;
    num.textContent = value;
}

function save(){
    var sav = num.textContent = value;
    alert("Total number is " + sav);

}