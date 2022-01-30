let codeToBreak = Math.floor(Math.random() * (999 - 111 + 1) ) + 111;
codeToBreak = codeToBreak.toString();
let array = [];
let objectsArray = [];
let numOfTries = 12;
let won = false;

let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");

////Add number to array function
function addNum(e){
    if(array.length<3){
        array.push(e.srcElement.value);        
    }

    for(let i = 0; i<array.length; i++){
        if(i==0){
            span1.innerText = array[i];
        }
        if(i==1){
            span2.innerText = array[i];
        }
        if(i==2){
            span3.innerText = array[i];
        }
    }
}

//reset function on reset button---
function reset(){
    array = [];
    span1.innerText = "_";
    span2.innerText = "_";
    span3.innerText = "_";
}

//Object with function to show our tried number in div result on bottom
function ObjectGuess(numOne,numTwo,numThree){
    this.a = numOne;
    this.b = numTwo;
    this.c = numThree;

    this.showResult = ()=>{
        let div = document.createElement("div");
        div.classList.add("display");
        div.classList.add("childRes");


        let spanOne = document.createElement("span");
        spanOne.innerText = this.a + " - ";
        if(this.a == codeToBreak.charAt(0)){
            spanOne.style.color = "gold";
        }else{
            spanOne.style.color = "red";
        }

        let spanTwo = document.createElement("span");
        spanTwo.innerText = this.b + " - ";
        if(this.b == codeToBreak.charAt(1)){
            spanTwo.style.color = "gold";
        }else{
            spanTwo.style.color = "red";
        }

        let spanThree = document.createElement("span");
        spanThree.innerText = this.c;
        if(this.c == codeToBreak.charAt(2)){
            spanThree.style.color = "gold";
        }else{
            spanThree.style.color = "red";
        }

        div.appendChild(spanOne);
        div.appendChild(spanTwo);
        div.appendChild(spanThree);

        return div;
    }
}


//function to try to guess number
function check(){
    if(numOfTries == 0) {
        resetAll(false)
        return;
    }
    
    if(array.length == 3){
        objectsArray.push(new ObjectGuess(array[0],array[1],array[2]));

        if(array.toString().replace(",", "").replace(",", "") == codeToBreak){
            won = true;
        }
        show();
        reset();
        numOfTries--;
    }else{
        let header = document.getElementById("h1");
        header.innerText = "Please choose 3 numbers!!";
        setTimeout(() => {
            header.innerText = "Break the Code!";
        }, 2000);
    }
}


////Showing every combination function

function show(){
    console.log(codeToBreak,"Code TO BREAK")
    let wrapper = document.getElementById("divShow");
    wrapper.innerHTML = "";

    for(let i= 0; i<12; i++){
        if(i<objectsArray.length){
            wrapper.appendChild(objectsArray[i].showResult());
        }else{
            let div = document.createElement("div");
            div.classList.add("childRes");
            div.classList.add("display");
            wrapper.appendChild(div);
        }
    }

    if(won) resetAll(true);

}


/*Reset everything function*/

function resetAll(status){
    codeToBreak = Math.floor(Math.random() * (999 - 111 + 1) ) + 111;
    codeToBreak = codeToBreak.toString();
    let header = document.getElementById("h1");
        array = [];
        objectsArray = [];
        numOfTries = 12;
        won = false;
        span1.innerText = "_";
        span2.innerText = "_";
        span3.innerText = "_";
        show();

        if(status){
            header.innerText = "You Won!!";
            setTimeout(() => {
                header.innerText = "Play again!";
                setTimeout(() => {
                    header.innerText = "Break the Code!";
                }, 1000);
            }, 2000);
        }else{
            header.innerText = "You lose!!";
            setTimeout(() => {
                header.innerText = "Break the Code!";

            }, 2000);
        }
}