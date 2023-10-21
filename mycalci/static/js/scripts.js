var all_buttons = document.querySelectorAll('.btns')

var def = 0;
var str = "";
var res=0;

all_buttons.forEach(bt => {
    bt.addEventListener('click', (e) => {
        def = e.target.innerHTML;
        str += def;
        document.getElementById('show').value = str;
        // console.log(str)
        // str=str.slice(0,-1);
        // str=str.slice(str.length-2)
        // console.log(str)
        // var aa=str.charAt(str.length-2)
        // console.log(aa)
        if(def =='AC'){
            str="";
            document.getElementById('show').value = str;
        }
        else if(str.startsWith('/') || str.startsWith('*') ||str.startsWith('%')){
            str=str.slice(1);
            document.getElementById('show').value = str;
        
        }
        //repeat=>code so that no operator can repeat
        else if(def=='.' &&  str.slice(0,-1).includes('.')){
            str=str.slice(0,-1);
            console.log(str)
            document.getElementById('show').value = str;
        }
        else if(def=='-' &&  str.charAt(str.length-2)=='-'){
            str=str.slice(0,-1);
            console.log(str)
            document.getElementById('show').value = str;
        }
        else if(def=='+' &&  str.charAt(str.length-2)=='+'){
            
            str=str.slice(0,-1);
            document.getElementById('show').value = str;
        }
        else if(def=='*' &&  str.charAt(str.length-2)=='*'){
            str=str.slice(0,-1);
            document.getElementById('show').value = str;
        }
        else if(def=='/' &&  str.charAt(str.length-2)=='/'){
            str=str.slice(0,-1);
            document.getElementById('show').value = str;
        }
        //repeat End
        //for ==
        else if (def == '='){
            try {
                var res=new String(eval(str.slice(0,-1)));
                document.getElementById('show').value = res;
            str='';
            } catch (error) {
                // console.log("error")

                document.getElementById('show').value = "ERROR";
                str='';
            }
            // var res=new String(eval(str.slice(0,-1)));
            // document.getElementById('show').value = res;
            // str='';
        }
        else if(def =='C'){
            str=str.slice(0,-2);
            document.getElementById('show').value = str;
        }
        
        
        
        
    })
})
