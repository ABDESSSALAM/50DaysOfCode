const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll',moveBox);
moveBox();
function moveBox(){
    const windowButtom = window.innerHeight / 5 * 4; //height of viewport
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top; //top relative on viewport
        if(boxTop<windowButtom){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}