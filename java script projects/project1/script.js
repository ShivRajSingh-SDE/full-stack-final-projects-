const btn1= document.getElementById("btn1");
const btn2= document.getElementById("btn2");

let count =0;
const countminus=()=>{
    const num= document.getElementById("number");
    count--;
    num.textContent=count;
}
const countplus=()=>{
    const num= document.getElementById("number");
    count++;
    const audio= new Audio("song3.mp3");
    audio.play();
    num.textContent=count;
}
const reset=()=>{
    const num= document.getElementById("number");
    count= 0;
    num.textContent=count;

}

