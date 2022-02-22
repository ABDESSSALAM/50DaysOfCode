const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const next = document.querySelector("#next");
const prev = document.querySelector('#prev');

let activeCercle = 1;
next.addEventListener("click", () => {

    prev.disabled = false;
    activeCercle++;
    if (activeCercle == circles.length) {
        next.disabled = true;

    }
    updateProg();

})
prev.addEventListener("click", () => {

    next.disabled = false;
    activeCercle--;
    if (activeCercle == 1) {
        prev.disabled = true;

    }

    updateProg();

})


function updateProg() {
    circles.forEach((circle, idx) => {
        if (idx < activeCercle) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })
    const actives = document.querySelectorAll(".active");
    // const calcWidth = (actives.length - 1) / (circles.length - 1);
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    // progress.style.width = ((actives.length - 1) / (circles.length - 1))*100 + "%";

}
