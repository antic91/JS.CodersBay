//Begrüßung
alert("Welcome!");


//Begrüßung mit name
alert("Welcome " + prompt("Tell us your name:"));


//3 variablen - Type und wert 

var first = 33;
var second = "Hello";
var third = false;

alert("First variable is a " + typeof first + " and the value is: " + first + "\n" +
      "Second variable is a " + typeof second + " and the value is: " + second + "\n" + 
      "Third variable is a " + typeof third + " and the value is: " + third);


///Werte Multiprizieren
var firstValue = prompt("Please enter your first number:");

var secondValue = prompt("Please enter your second number:");

document.write(Number(firstValue) * Number(secondValue));