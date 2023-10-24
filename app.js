let area = document.getElementById('text_area');
let btn = document.querySelectorAll('button');
let string = " "
btn.forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.innerText == "="){
            string= String(eval(string))
            area.value =string;
        }
        else if(e.target.innerText == 'AC'){
            string= "";
            area.value = string;
        }
        else if(e.target.innerText == 'DEL'){
           string = string.substring(0,string.length-1)
           area.value = string 
        }
        else{
            string += e.target.innerText;
            area.value = string
        }
    })
})