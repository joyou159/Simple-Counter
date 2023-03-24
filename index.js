let count = 0;
let num = document.getElementById("countLabel");
let increment = document.getElementById("incrementBtn");
let decrement = document.getElementById("decrementBtn");
let reset = document.getElementById("resetBtn");
const audio = new Audio();
audio.src = "./media/Bazzer.mp3";

increment.addEventListener('click',() =>
{   count++;
    num.innerHTML = count;
    applyColor();   
});

decrement.addEventListener('click',() =>
{
    count--;
    num.innerHTML = count;
    applyColor();   
});

reset.addEventListener('click',() =>
{   
    count = 0
    num.innerHTML = count; 
    audio.play();
    applyColor();
});

function applyColor() 
{
    if(num.innerHTML>0)
    {
        num.style.color = 'green';
    }
    else if(num.innerHTML<0)
    {
        num.style.color = 'red';
    }
    else 
    {
        num.style.color = 'black';
    }
}