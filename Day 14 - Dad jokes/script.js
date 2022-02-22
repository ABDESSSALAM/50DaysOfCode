const jokeEL = document.querySelector("#joke-text")
const jokeBtn = document.querySelector("#btn")


generatejoke();
jokeBtn.addEventListener("click",()=>generatejoke())

async function generatejoke(){
    console.log("feetshing")
    const config = {
        headers:{
            'Accept' : 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',config)
    console.log(res)
    const data = await res.json()
    console.log(data.joke)
    jokeEL.innerText=data.joke
}


/*

without async await
function generatejoke(){
    
    const config = {
        headers:{
            'Accept' : 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com/',config)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.joke)
        jokeEL.innerText=data.joke;
    })
}

*/

