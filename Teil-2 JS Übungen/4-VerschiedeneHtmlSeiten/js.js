let firstRandom;
let secondRandom;
var array = ["+", "-", "*", "/"]

////First page
function start(){

    setRandoms();
    let operation = setOperationRandom();
    let userInput;
    let result;
    
    if(operation == 0){
        result = firstRandom + secondRandom;
        userInput = Number(window.prompt(firstRandom + " + " + secondRandom + " = ?" ));
    }else if(operation == 1){
        result = firstRandom - secondRandom;
        userInput = Number(window.prompt(firstRandom + " - " + secondRandom + " = ?" ));

    }else if(operation == 2){
        result = firstRandom / secondRandom;
        userInput = Number(window.prompt(firstRandom + " / " + secondRandom + " = ?" ));
    }
    else if(operation == 3){
        result = firstRandom * secondRandom;
        userInput = Number(window.prompt(firstRandom + " * " + secondRandom + " = ?" ));
    }
    checkFirstResult(userInput,result);
}

//Second page
function startSec(){

    setRandoms();
    let operation = setOperationRandom();
    let userInput;
    let result;
    
    if(operation == 0){
        result = firstRandom + secondRandom;
        userInput = Number(window.prompt(firstRandom + " + " + secondRandom + " = ?" ));
    }else if(operation == 1){
        result = firstRandom - secondRandom;
        userInput = Number(window.prompt(firstRandom + " - " + secondRandom + " = ?" ));

    }else if(operation == 2){
        result = firstRandom / secondRandom;
        userInput = Number(window.prompt(firstRandom + " / " + secondRandom + " = ?" ));
    }
    else if(operation == 3){
        result = firstRandom * secondRandom;
        userInput = Number(window.prompt(firstRandom + " * " + secondRandom + " = ?" ));
    }
    checkSecResult(userInput,result);
}
//Third page
function startThird(){

    setRandoms();
    let operation = setOperationRandom();
    let userInput;
    let result;
    
    if(operation == 0){
        result = firstRandom + secondRandom;
        userInput = Number(window.prompt(firstRandom + " + " + secondRandom + " = ?" ));
    }else if(operation == 1){
        result = firstRandom - secondRandom;
        userInput = Number(window.prompt(firstRandom + " - " + secondRandom + " = ?" ));

    }else if(operation == 2){
        result = firstRandom / secondRandom;
        userInput = Number(window.prompt(firstRandom + " / " + secondRandom + " = ?" ));
    }
    else if(operation == 3){
        result = firstRandom * secondRandom;
        userInput = Number(window.prompt(firstRandom + " * " + secondRandom + " = ?" ));
    }
    checkThirdResult(userInput,result);
}



function setRandoms(){
   firstRandom = Math.floor(Math.random() * 101 );
   secondRandom = Math.floor(Math.random() * 101 );
}


function setOperationRandom(){
    let random = Math.floor(Math.random() * array.length );
    return random;
}


///Check First result function
function checkFirstResult(userInput,result){
    if(userInput == result){
        alert("Congratulation!! Good Answer!");
        window.close('./index.html');
        window.open('./second.html','_blank');
    }else{
        alert("Wrong! You can start a new game!")
    }
}

///Check Second result function
function checkSecResult(userInput,result){
    if(userInput == result){
        alert("Congratulation!! Good Answer!");
        window.close('./second.html');
        window.open('./third.html', '_blank');
        
    }else{
        alert("Wrong! You can start a new game!")
    }
}
///Check Third result function
function checkThirdResult(userInput,result){
    if(userInput == result){
        alert("Congratulation!! Good Answer!");
        alert("Congratulation! You are a master!!");
        window.close('./third.html');
        window.open('./index.html','_blank');
    }else{
        alert("Wrong! You can start a new game!")
    }
}
