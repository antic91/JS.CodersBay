let array = [2,4,8,7,5,66,125,11114];

console.log(array);

function doubled(){
    for(var i = 0; i < array.length; i++){
        array[i] *= 2;
    }
}

doubled();

console.log(array);