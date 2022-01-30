let input = document.getElementById("text");
let button = document.getElementById("btn");


button.addEventListener("click",(e)=>{
    e.srcElement.innerText = input.value;
})

