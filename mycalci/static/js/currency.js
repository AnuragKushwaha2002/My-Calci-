const droplist = document.querySelectorAll(".drop-list");
fromcurrency = document.querySelector("#from1");
tocurrency = document.querySelector("#to1");
apikey= 'cc068d110bc48bb8e4d954a7'
// console.log(fromcurrency,tocurrency)
const getbutton =document.querySelector(".btn")
for (let i=0;i<droplist.length;i++){
    for (currency_code in Country_List){
        //setting default values
        let selected;
        if (i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }
        else if(i == 1){
            selected =currency_code == "INR" ? "selected" : "";
        }
        let optiontag= `<option value="${currency_code}" ${selected}>${currency_code}`;
        droplist[i].insertAdjacentHTML('beforeend',optiontag);
    }
}  
getbutton.addEventListener("click",e =>{
    e.preventDefault();
    getExchangeRate();
})
window.addEventListener("load",() => {
getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount");
    const exrate =document.querySelector('.showrate');
    let amountval=amount.value;
    
    if (amountval == "" || amountval == "0"){
        amount.value='1'
        amountval=1;
    }
    let url= `https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromcurrency.value}`;
    fetch(url).then(response => response.json())
            .then(result => {
                let exchangerate1 = result.conversion_rates[tocurrency.value];
                totalexchange =(amountval * exchangerate1).toFixed(2);
                // console.log(totalexchange);
                
                exrate.innerHTML= `${amountval} ${fromcurrency.value} = ${totalexchange} ${tocurrency.value}`;
                
            });

}