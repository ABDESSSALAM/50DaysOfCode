const boxes = document.querySelectorAll(".box");

boxes.forEach(box=>{
    box.addEventListener('mouseover',()=>{
        box.classList.add("active");
    })
    box.addEventListener('mouseout',()=>{
        box.classList.remove("active");
    })
})