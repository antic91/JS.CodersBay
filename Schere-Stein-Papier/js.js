let absoluteDiv = document.getElementById("absolute");
let startButton = document.getElementById("start");

let leftDiv = document.getElementById("left");
let rightDiv = document.getElementById("right");

let array = ['./rock.svg', './papier.svg', './scissors.svg'];
let plays = [];

let roundsToPlay = 0;
let wonStatus = 0;
let drawStatus = 0;
let lostStatus = 0;


let showRounds = document.getElementById("roundShow");
let won = document.getElementById("won");
let draw = document.getElementById("draw");
let lost = document.getElementById("lost");



function GameObj(comp,user){
    this.comp = comp;
    this.user = user;

    this.check = ()=>{
        if(this.comp == this.user){
            return 0
        }
        if( (this.comp == 1 && this.user == 3) || (this.comp == 2 && this.user == 1 ) || (this.comp == 3 && this.user == 2) ){
            return 1
        }
        if((this.user == 1 && this.comp == 3) || (this.user == 2 && this.comp == 1 ) || (this.user == 3 && this.comp == 2)){
            return 2
        }
    }

    this.setDraw = ()=>{
        drawStatus++;
        draw.innerText = "Draw: " + drawStatus;
        leftDiv.innerHTML = " <img src='" + array[comp-1] + "' class='imageDown AnimationjackInTheBox'>";
        rightDiv.innerHTML = " <img src='" + array[user-1] + "' class='imageDown AnimationjackInTheBox'>";
    }

    this.compWins = ()=>{
        lostStatus++;
        lost.innerText = "Lost: " + lostStatus;
        leftDiv.innerHTML = " <img src='" + array[comp-1] + "' class='imageDown AnimationjackInTheBox'>";
        rightDiv.innerHTML = " <img src='" + array[user-1] + "' class='imageDown AnimationjackInTheBox'>";
    }

    this.userWins = ()=>{
        wonStatus++;
        won.innerText = won.innerText = "Won: " + wonStatus;
        leftDiv.innerHTML = " <img src='" + array[comp-1] + "' class='imageDown AnimationjackInTheBox'>";
        rightDiv.innerHTML = " <img src='" + array[user-1] + "' class='imageDown AnimationjackInTheBox'>";
    }
}


//On click on start button function........
startButton.addEventListener("click",()=>{ 
    absoluteDiv.classList.remove("AnimationFadeIn");
    absoluteDiv.classList.add("AnimationFadeOut");

    setTimeout(() => {
        absoluteDiv.classList.add("displayNone");
    }, 1000);

    if(document.getElementById("rounds").value > 0){
        roundsToPlay = document.getElementById("rounds").value;
    }else{
        roundsToPlay = 10
    }
    showRounds.innerText = "Rounds to play: " + roundsToPlay;
});






//Function when user chooses option

function check(e){

    if(roundsToPlay==0 | wonStatus==3 || lostStatus==3) return;


    let comp = Math.floor(Math.random() * 3 ) +1;

    let userChoosed = Number(e.srcElement.attributes[1].value);

    plays.push(new GameObj(comp,userChoosed));

    let checked = plays[plays.length-1].check();

    if(checked == 0){
        plays[plays.length-1].setDraw();
    }
    if(checked == 1){
        plays[plays.length-1].compWins();
    }
    if(checked == 2){
        plays[plays.length-1].userWins();
    }
    
    roundsToPlay--;
    showRounds.innerText = showRounds.innerText = "Rounds to play: " + roundsToPlay;
    
    if(wonStatus==3 || lostStatus==3){
        if(wonStatus==3) {
            showRounds.innerText = showRounds.innerText = "You won! Congrats!";
        }else{
            showRounds.innerText = showRounds.innerText = "You lost!!";
        }
    }
    
}






/*******Reset******/


document.getElementById("reset").addEventListener("click",()=>{

    absoluteDiv.classList.remove("AnimationFadeOut");
    absoluteDiv.classList.add("AnimationFadeIn");
    absoluteDiv.classList.remove("displayNone");

    roundsToPlay = 0;
    wonStatus = 0;
    drawStatus = 0;
    lostStatus = 0;

    showRounds.innerText = showRounds.innerText = "Rounds to play: " + roundsToPlay;
    won.innerText = won.innerText = "Won: " + wonStatus;
    draw.innerText = lost.innerText = "draw: " + drawStatus;
    lost.innerText = draw.innerText = "lost: " + lostStatus;
    leftDiv.innerHTML = "";
    rightDiv.innerHTML = "";
})