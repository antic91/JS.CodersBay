let canvas = document.getElementById("canvasHangman");
let c = canvas.getContext('2d');


let word = window.prompt("Enter your word here!").split("");
usedLetters = [];
let guessed = false;

setUsedLetters();

let triesRest = 0;

let wrapperWord = document.getElementById("wort");
let wrapperInfo = document.getElementById("info");


//On key up function
window.onkeyup = (e)=>{
    
    if(triesRest >= 10) return;


    for(let i = 0; i < word.length; i++){
        if(word[i] == e.key){
            usedLetters[i] = e.key;
            guessed = true;
        }
    }
    if(!guessed){
        draw();
        setMessage(false);
    }else{
        setMessage(true);
    }

    showLetters();
    triesRest++;
    if(word.toString() != usedLetters.toString() && triesRest == 10){
        lost();
    };
}


//Function to show letters!
function showLetters(){
    wrapperWord.innerHTML = "";

    for(let i = 0; i < usedLetters.length; i++){

        let span = document.createElement("span");
        span.innerText = usedLetters[i];
        span.style.marginRight = "15px";
        wrapperWord.appendChild(span);

    }
}

//Draw on wrong letter
function draw(){
    switch(triesRest){
        case 0:
            c.beginPath();
            c.moveTo(50,480);
            c.lineTo(150,480);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 1: 
            c.beginPath();
            c.moveTo(100,480);
            c.lineTo(100,100);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 2:
            c.beginPath();
            c.moveTo(100,100);
            c.lineTo(350,100);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 3: 
            c.beginPath();
            c.moveTo(350,100);
            c.lineTo(350,150);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 4:
            c.beginPath();
            c.arc(350,175,25,toRad(0),toRad(360));
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 5: 
            c.beginPath();
            c.moveTo(350,200);
            c.lineTo(350,380);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 6:
            c.beginPath();
            c.moveTo(350,230);
            c.lineTo(300,300);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 7:
            c.beginPath();
            c.moveTo(350,230);
            c.lineTo(400,300);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 8:
            c.beginPath();
            c.moveTo(350,380);
            c.lineTo(300,480);
            c.strokeStyle = "black";
            c.stroke();
            break;
        case 9: 
            c.beginPath();
            c.moveTo(350,380);
            c.lineTo(400,480);
            c.strokeStyle = "black";
            c.stroke();
            break;
    }
};


//Set array usedLetters on start!!
function setUsedLetters(){
    for(let i = 0; i < word.length; i++){
        usedLetters.push("*");
    }
}


function setMessage(status){
    if(status){
        wrapperInfo.innerText = "Congrats!!!"
    }else{
        wrapperInfo.innerText = "Wrong Letter!"
    }

    setTimeout(() => {
        wrapperInfo.innerText = "";
    }, 500);
}

//Function to show lost message 
function lost(){
    setTimeout(() => {
        wrapperInfo.innerText = "You lost!!!!";
    }, 600);

    setTimeout(() => {
        wrapperInfo.innerText = "";
    }, 2000);
}



/*Function to get radians**/

function toRad(degrees){
    var partPi = degrees/180;
    return partPi*Math.PI;
}