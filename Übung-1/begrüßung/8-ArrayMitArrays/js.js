var array = [
    ["Array1-1", "Array1-2", "Array1-3"],
    ["Array2-1", "Array2-2", "Array2-3"],
    ["Array3-1", "Array3-2", "Array3-3"]
]


var personIndex = Number(prompt("Please enter number of Person here(between 1 and 3"));
var infoIndex = Number(prompt("Please enter number of information here(between 1 and 3"));

if(((personIndex > 3 ) || (infoIndex > 3)) || ((personIndex < 1 ) || (infoIndex < 1))){
    document.write("Please enter a values between 1 and 3");
}else{
    document.write(array[personIndex-1][infoIndex-1]);
}