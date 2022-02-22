const bg = document.querySelector(".bg");
const loadingTxt = document.querySelector(".loading-txt");

load = 0;
let intr = setInterval(blureLoading, 30)
function blureLoading() {
    load++;
    if (load > 99) {
        clearInterval(intr);
    }
    console.log(load);
    loadingTxt.innerText = `${load}%`;
    loadingTxt.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//function scale to map in range of numbers to another rang of nambers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

}