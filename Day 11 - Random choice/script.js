const txtarea=document.querySelector("#textarea");
const tags=document.querySelector("#tags");
let choices=[]
txtarea.addEventListener("keypress",(e)=>{
    if(e.keyCode==44){
        choices=txtarea.value.split(",");
        tag=document.createElement("span")
        tag.classList.add("tag")
        tag.innerText=choices[choices.length-1];
        tags.appendChild(tag);
        
        console.log(choices)
    }
    if(e.keyCode==13 & choices.length>0){
        setTimeout(()=>{
            e.target.value='';
        },10)
        randomSelect();
    }
    
})

function randomSelect(){
    const times=30;
    const interval=setInterval(() => {
        const randtg=pickRandomTag();
        activeTag(randtg);
        setTimeout(() => {
            unActiveTag(randtg);
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randtg=pickRandomTag();
            activeTag(randtg);
        }, 100);
    }, times*100);
}

function pickRandomTag(){
    const tgs=document.querySelectorAll(".tag");
    return tgs[Math.floor(Math.random()*tgs.length)]
}
function activeTag(tg){
    tg.classList.add("active");
}

function unActiveTag(tg){
    tg.classList.remove("active");
}