
const textbox = document.getElementById("textbox");
const tocelisius = document.getElementById("tocelisius");
const tofaranhit = document.getElementById("tofaranhit");
const result = document.getElementById("reslt");

let temp;
function convert(){
  
  
  if(tofaranhit.checked){
    temp =Number(textbox.value );
    temp= temp * 9/5 + 32 ;
    result.innerHTML = temp.toFixed(1) +'&#8457;';
  }else if(tocelisius.checked){
    temp =Number(textbox.value );
    temp= (temp - 32) * 5/9;
    result.textContent = temp.toFixed(1) +'℃';
  }else{
    result.textContent= "select unit";
  }
}
