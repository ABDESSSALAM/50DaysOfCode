const pannels = document.querySelectorAll(".panel");

pannels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        removeActive()
        panel.classList.add("active");
    })
})

function removeActive(){
    pannels.forEach(panel=>{
        panel.classList.remove("active");
    })
    
}