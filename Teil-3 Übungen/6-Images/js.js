let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let button = document.getElementById("btn");


button.addEventListener("click",()=>{
    img1.src = "./aisa.jpg"
    img1.style.width = "200px";

    img2.src = "./cairo.jpg"
    img2.style.width = "200px";
})