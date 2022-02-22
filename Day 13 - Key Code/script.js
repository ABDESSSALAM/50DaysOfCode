const eventKey=document.querySelector("#box1 h3")
const eventKeyCode=document.querySelector("#box2 h3")
const eventCode=document.querySelector("#box3 h3")

const ask=document.querySelector(".ask")
const result=document.querySelector(".result")


window.addEventListener("keypress",(e)=>{
    console.log(e)
    result.classList.remove("fadeout");
    ask.classList.add("fadeout")
    eventKey.innerText=e.key;
    eventKeyCode.innerText=`${e.keyCode}`;
    eventCode.innerText=e.code;

})