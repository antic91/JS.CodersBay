let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");


div1.addEventListener("click",()=>{
    if(div1.style.backgroundColor == "red"){
        div1.style.backgroundColor  = "white";
    }else{
        div1.style.backgroundColor  = "red";
    }
});

function mouseOver(){
    div2.style.backgroundColor  = "red";
}


div3.addEventListener("mouseout",()=>{
    div3.style.backgroundColor = "red";
})