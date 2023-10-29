const counter= document.getElementById('counter');
const disply=document.getElementById('div1');
const disply2=document.getElementById('div2');
var a=0;
disply.textContent=a;
counter.addEventListener("click",count);
function count(){
    a++;
 disply.textContent=a;
 
 

}

function changeColor() {
    var red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
 var green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
 var blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
 var colour='#'+red+green+blue

 disply2.textContent=colour
 document.body.style.backgroundColor=colour
    var element = document.getElementById("myElement");
    element.style.backgroundColor = colour; 
}