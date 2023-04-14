const initBackground = document.getElementById("initBackground")
const fadeInBackground = document.getElementById("fadeInBackground")
const startButton = document.getElementById("startButton")
const content=document.getElementById("content")


function ooga(){
    initBackground.style.transform="translate(0%, -100%)";
    startButton.style.scale="0";
    content.style.display="block"
    fadeInBackground.style.opacity="0"
    fadeInBackground.style.height="400vh"
    completFadeOut()
    return
}

async function completFadeOut(){
    await new Promise(resolve => setTimeout(resolve, 5000));
    fadeInBackground.style.display="none"
}

const earth=document.querySelector("#earth .planet");
const mars=document.querySelector("#mars .planet");
const jupiter=document.querySelector("#jupiter .planet");
const uranus=document.querySelector("#uranus .planet");
const sun=document.getElementById("sun");

console.log(earth)
sun.addEventListener("mouseover", sayhi);
earth.addEventListener("mouseover", hoverEarth);
earth.addEventListener("mouseout", unHoverEarth);

function sayhi(){
    console.log("ooga");
}

function hoverEarth(){
    const orbit=document.getElementById("earth");
    const container=document.querySelector("#earth .planet-container")
    const planet=earth
    orbit.style.animationPlayState="paused"
    container.style.animationPlayState="paused"
    planet.style.animationPlayState="paused"
    console.log("pause")
    return
}

function unHoverEarth(){
    const orbit=document.getElementById("earth");
    const container=document.querySelector("#earth .planet-container")
    const planet=earth
    orbit.style.animationPlayState="running"
    container.style.animationPlayState="running"
    planet.style.animationPlayState="running"
    console.log("resume")
    return
}

