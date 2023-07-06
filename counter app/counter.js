let h1 =document.querySelector("#counter");
let currentvalue =0;
let increment= document.querySelector("#btn1")
let decrement= document.querySelector("#btn2")
let reset= document.querySelector("#btn3")
increment.addEventListener('click',()=>{
currentvalue++;
h1.textContent = currentvalue;
});
decrement.addEventListener('click',()=>{
    currentvalue--;
    h1.textContent = currentvalue;
    
});
reset.addEventListener('click',()=>{
    currentvalue=0;
    h1.textContent = currentvalue;});
