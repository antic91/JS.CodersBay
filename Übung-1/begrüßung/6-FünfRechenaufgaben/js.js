var variableOne = 24;
var variableTwo = 4;

var results = [];
var initialResults = [(variableOne + variableTwo), (variableOne - variableTwo), (variableOne * variableTwo), (variableOne / variableTwo), ((variableOne / variableTwo) + variableOne)]

results[0] = Number(prompt("Please enter result here!: " + variableOne + " + " + variableTwo));
results[1] = Number(prompt("Please enter result here!: " + variableOne + " - " + variableTwo));
results[2] = Number(prompt("Please enter result here!: " + variableOne + " * " + variableTwo));
results[3] = Number(prompt("Please enter result here!: " + variableOne + " / " + variableTwo));
results[4] = Number(prompt("Please enter result here!: " + variableOne + " / " + variableTwo  + " + " + variableOne));

let count = 0;

for(var i = 0; i<results.length; i++){
    if(results[i] == initialResults[i]) 
    count++;
}

switch(count){
    case 0:
    case 1:
    case 2:
    case 3:
        document.write("Your points are under 4. Points " + count);
        break;
    
    case 4:
        document.write("Your points are 4 Points " + count);
        break;
    case 5:
        document.write("Your points are 5. Points " + count);
        break;
}