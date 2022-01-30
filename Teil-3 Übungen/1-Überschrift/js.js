var header = document.getElementsByTagName("h1")[0];
var paragraph = document.getElementById("p");
function set(){

    header.innerText = window.prompt("Enter your header here: ");
    paragraph.innerText = window.prompt("Enter your paragraph here: ");
}

set();