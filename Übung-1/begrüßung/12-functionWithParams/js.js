
let userInput = Number(window.prompt("Please enter a number"));


function doppelt(userInput){

    if(!isNaN(userInput)){
        userInput *= 2;
        return userInput;
    }else{
        return "Your value is not a number!";
    }
}

document.write(doppelt(userInput));