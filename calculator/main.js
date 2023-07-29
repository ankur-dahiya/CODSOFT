function display(btn) {
    colorChange(btn);
    let val = btn.value;
    if(val!=="+" && val!=="-" && val!=="*" && val!=="/" ){
        val = (+val);
    }
    document.getElementById("result").value += val;
}

function colorChange(btn){
    let changeColor = "#4d90fe"
    if(btn.value==="="){
        changeColor = "#3079ED";
    }
    else if(btn.value==="c"){
        changeColor = "red";
    }
    btn.setAttribute("style",`background-color:${changeColor}`)
    setTimeout(()=>{
        btn.removeAttribute("style");
    },200)
}
function clr() {
    document.getElementById("result").value = ""
}
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}
