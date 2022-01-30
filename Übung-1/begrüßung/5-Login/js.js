var username = "User1";

var password = "123456";


var inputUsername = prompt("Please enter your username here:");

var inputPassword = prompt("Please enter your password here:");


if( (username == inputUsername) && (password == inputPassword) ){
    document.write("Successful log in!")
}
else if((username != inputUsername) && (password == inputPassword)){
    document.write("You entered wrong Username!")
}
else if((username == inputUsername) && (password != inputPassword)){
    document.write("You entered wrong Password!")
}else{
    document.write("Your Username and Password are wrong!!")
}