
setInterval(settime,1000);
function settime(){
    let time =new Date;
    var hrs =time.getHours();
var min =time.getMinutes();
var sec =time.getSeconds();
var hr=(hrs<10)? "0"+hrs:hrs;
var mn=(min<10)? "0"+min:min;
var se=(sec<10)? "0"+sec:sec;

var a =document.getElementById('hrs').innerHTML=hr;
var b =document.getElementById('min').innerHTML=mn;
var c =document.getElementById('sec').innerHTML=se;
// console.log(c)
}
// window.addEventListener('load',setInterval(settime,1000))
