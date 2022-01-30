let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");


function setBackgrounds(event){
    event.srcElement.style.backgroundColor = "green";
    if(event.srcElement.id == "div2" || event.srcElement.id == "div3" ||event.srcElement.id == "div4"){
        event.srcElement.parentElement.style.backgroundColor = "yellow";
    }
}