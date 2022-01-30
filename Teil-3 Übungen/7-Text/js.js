let btnBlack = document.getElementById("btnBlack");
let btnOrange = document.getElementById("btnOrange");
let btnBlue = document.getElementById("btnBlue");


btnBlack.addEventListener("click",()=>{
    document.body.style.backgroundColor = "#000000"
})

btnOrange.addEventListener("click",()=>{
    document.body.style.backgroundColor = "orange"
})

btnBlue.addEventListener("click",()=>{
    document.body.style.backgroundColor = "blue"
})