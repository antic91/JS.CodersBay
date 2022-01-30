let inputAttempts;
let platform;

let field = document.getElementById("wrapper");
let phone = document.getElementById("imagePhone");
let alien = document.getElementById("imageAlien");
let attempts = document.getElementById("attempts");
let distanceShow = document.getElementById("distance");
let gravitationShow = document.getElementById("gravitation");
let forceInput = document.getElementById("forceInput");

let fired = false;
let x= 0
let y = 0;


let alienPos;
let gravitation;
let angle;
let force;
let distance = 0;
let result = "";

let xPos = 0;
let yPos = 0;
let Interval;
let down = 0;
var rotate = 0;




function start(){
    inputAttempts = document.getElementById("rounds").value;
    platform = document.getElementById("platform").value;
    fired = false;

    if(inputAttempts.trim().length > 0){
        document.getElementById("absolute").classList.add("displayNone");

        attempts.innerHTML = "<h2>Attempts: " + inputAttempts +"</h2>";
        distanceShow.innerText = "Distance: " + 0 + "m";
        document.getElementById("angle").innerText = "Angle: " + 0 + "deg";
        document.getElementById("force").innerText = "Force: " + 0 + "m/s";

        inputAttempts = Number(inputAttempts);
        setUpGame();
        setAlienPosition();

    }else{
        alert("You have to enter the number of attempts")
    }

}



//Function to set alien position
function setAlienPosition(){
    alienPos = Math.floor(Math.random() * (1100 - 450 + 1) ) + 450;
    alien.style.position = "absolute"
    alien.style.bottom = 0 + "px";
    alien.style.left = alienPos + "px";
}



function setUpGame(){
    if( platform == "Earth"){
        setEarth();
    }

    if( platform == "Moon"){
        setMoon();
    }

    if( platform == "Mars"){
        setMars();
    }

    if( platform == "Jupiter"){
        setJupiter();
    }
}




function setEarth(){
    field.style.backgroundImage = "url('./earth_1.jpg')";
    gravitation = 9.81;
    gravitationShow.innerText = "Gravitation: " + gravitation + "m/s2";
}



function setMoon(){
    field.style.backgroundImage = "url('./moon.jpg')";
    gravitation = 1.62;
    gravitationShow.innerText = "Gravitation: " + gravitation + "m/s2";
}



function setJupiter(){
    field.style.backgroundImage = "url('./jupiter.jpg')";
    gravitation = 24.79;
    gravitationShow.innerText = "Gravitation: " + gravitation + "m/s2";
}



function setMars(){
    field.style.backgroundImage = "url('./mars.jpg')";
    gravitation = 3.69;
    gravitationShow.innerText = "Gravitation: " + gravitation + "m/s2";
}




//Mouse move to set Angle on absolute div!...
document.getElementById("absolutePhone").addEventListener("mousemove",(e)=>{
    if(!fired){
    setXandY(e,false);
    }

})




//On click function to confirmangle....
document.getElementById("absolutePhone").addEventListener("click",(e)=>{

    if(!fired){
    setXandY(e,true);
    }

})




//Function to set x and y..
function setXandY(e,clicked){
    let rect = e.target.getBoundingClientRect();
    if(clicked){
        x = e.clientX-rect.left;
        y = rect.bottom - e.clientY;
        setAngle(x,y,clicked);
    }else{
        let a = e.clientX-rect.left;
        let b = rect.bottom - e.clientY;
        setAngle(a,b,clicked);
    }
}




function setAngle(dx,dy,clicked){
    angle = Math.atan2(dy, dx); 
    angle *= (180 / Math.PI); 
    angle = angle.toFixed(2);
    if(angle > 90){
        angle = 90;
    }
    if(angle < 1){
        angle = 1;
    }
    document.getElementById("angle").innerText = "Angle: " + angle + "deg";
    if(clicked){
        document.getElementById("angleInput").value = angle;
    }
}




function fire(){
    if(!fired && inputAttempts>0){

        force = Number(forceInput.value);
        angle = Number(document.getElementById("angleInput").value);
        document.getElementById("angle").innerText = "Angle: " + angle + "deg";
        fired = true;
        movePhone();
        inputAttempts--;
    }
    document.getElementById("force").innerText = "Force: " + force.toFixed(2) + "m/s";
    attempts.innerHTML = "<h2>Attempts: " + inputAttempts +"</h2>";
}




//Function to move the phone...
function movePhone() {
    
    interval = setInterval(() => {
        if (yPos < -0.2) {
            clearInterval(interval);
            if (Math.abs(xPos - alienPos) < 12) {
                result = "Great job!";
            } else if (Math.abs(xPos - alienPos) < 55) {
                result = "You are close";
            } else {
                result = "Not so close!";
            }
            alert(result);

            if(inputAttempts>0){
                alert("Try one more time!")
                reset(true);
            }else{
                alert("You dont have any more attempts left! Want to play one more time??");
                document.getElementById("absolute").classList.remove("displayNone");
                reset(false);
            }
            return;
        }
        //let wurfweite = ((force* force) * Math.sin(2 * angle)) / gravitation;
        rotate = rotate + 6;
        down -= (gravitation);
        xPos = xPos + x;
        yPos = yPos + y + down;
        document.getElementById("distance").innerHTML = "Distance: " + xPos + "m";
        phone.style.transform = "rotate(" + rotate + "deg)";
        phone.style.bottom = yPos + "px";
        phone.style.left = xPos + "px";
    }, 100);

}





//Reset all function
function reset(status){
    fired = false;
    xPos = 0;
    yPos = 0;
    x = 0;
    y = 0;
    angle = 0;
    distance = 0;
    result = "";
    down = 0;
    rotate = 0;
    phone.style.bottom = 10 + "px";
    phone.style.left = 30 + "px";
    forceInput.value = "";
    document.getElementById("angleInput").value = "";
    document.getElementById("angle").innerText = "Angle: " + 0 + "deg";
    document.getElementById("force").innerText = "Force: " + 0 + "m/s";
    document.getElementById("distance").innerText = "Distance: " + 0 + "m";
    
    if(status){
        setUpGame();
        setAlienPosition();
    }
}
