let i = 1;
function f() {
    document.write(i + "<br>");
    i++;
}
// setInterval() ähnlich, Programm ruft 
// entsprechende Funktion immer wieder 
// aufs Neue auf
let interval = setInterval(f, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 60100);