let input = document.getElementById("text");
let button = document.getElementById("btn");
let start = "https://";
let end = ".com";


button.addEventListener("click",(e)=>{
    if(input.value.length < 9) return;

    if(input.value.substring(input.value.length-4,input.value.length) != end){
        alert("Enter a valid Website!!");
    }else{
        if(input.value.substring(0,8) != start){
            window.location.replace(start + input.value);
        }else{
            window.location.replace(input.value);
        }
    }
})

