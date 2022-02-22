const bntTog=document.querySelector("#toggle")
const nav=document.querySelector("nav");

bntTog.addEventListener("click",()=>{
    nav.classList.toggle("active")
})