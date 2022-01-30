

function doppelt(){
    let userInput = Number(window.prompt("Please enter a number"));
    console.log(typeof userInput)
    if(!isNaN(userInput)){
        userInput *= 2;
        document.write(userInput);
    }else{
        document.write("Your value is not a number!")
    }
}

doppelt();