var num1=document.querySelector('#input-1');
var num2=document.querySelector('#input-2');
var getbtn=document.querySelector('#convert');

getbtn.addEventListener('click',e => {
    
    var celsiusvalue=num1.value;
    // F = C×(9/5)+32
    var fahre=celsiusvalue*(9/5)+32;
    num2.value=fahre;
    // console.log(celsius);
    // console.log(fahre);
    if(celsiusvalue=='' ){
        num1.value='0'
    }
    
})




