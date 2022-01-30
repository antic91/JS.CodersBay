var div = document.getElementById("div");

function printMessage(event){
    let array = event.srcElement.value.split("");
    if((array.indexOf("@") >= 0)){
        alert("Your Email is Valid!")
    }else{
        alert("Please enter a valid Email!!")
    }
}