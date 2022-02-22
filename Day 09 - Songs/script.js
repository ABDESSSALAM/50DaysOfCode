const songs=["GOT","ILY","KTS","RAJA"]
const Titles=["GOT themeSong","A La Vie a la mort","Jpuiter","Free Phalastine"]

console.log(songs.indexOf("GOT"));
songs.forEach(song=>{
    const btn = document.createElement("button");
    btn.classList.add("btn")
    btn.innerText=Titles[songs.indexOf(song)];
    btn.addEventListener("click",()=>{
        stopSongs();
        document.getElementById(song).play()
    })
    document.getElementById("btns").appendChild(btn);
})

function stopSongs(){
    songs.forEach(song=>{
       const sound= document.getElementById(song);
        sound.pause();
        sound.currentTime=0;
    })
}