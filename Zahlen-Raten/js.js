let buttonStart = document.getElementById("btn");
let buttonTry = document.getElementById("try");
let resultDiv = document.getElementById("resultDiv");
let triesShow = document.getElementById("triesShow");
let guessed = false;
let num = null;

let numberOfTries = 5;

buttonStart.addEventListener("click",(e)=>{
    e.target.parentElement.parentElement.children[1].children[1].children[0].lastElementChild.firstElementChild.disabled = false;
    num = getRandom();
    numberOfTries = 5;
    resultDiv.innerText = "Tries: " + numberOfTries;
    guessed = false;
    console.log(num);
});



function tryIt(e){

    numberOfTries--;
    triesShow.innerText = "Tries: " + numberOfTries

    let userNum = Number(document.getElementById("userInp").value);
    document.getElementById("userInp").value = "";
    if(userNum == num){
        guessed = true;
    }else{
        writeMessage(num, userNum);
    }

    if(guessed){
        resultDiv.innerText = "Congrats!!!";
    }

    if(numberOfTries == 0){
        e.srcElement.disabled = true;
        if(!guessed){
            resultDiv.innerText = "You lost!!!!";
        }
    }
}




function writeMessage(num, userNum) {
    if(userNum > num-10 && userNum < num+10){
        resultDiv.innerText = "You are close!!!!";
        return;
    }
    if(userNum > num-20 && userNum < num+20){
        resultDiv.innerText = "Try better!!!!";
        return;
    }else{
        resultDiv.innerText = "You are not close!!!!";
    }
}




function getRandom(){
    return Math.floor(Math.random() * (101) );
}