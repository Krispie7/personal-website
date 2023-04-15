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

sun.addEventListener("mouseover", hoverSun);
sun.addEventListener("mouseover", unHoverSun);
earth.addEventListener("mouseover", hoverEarth);
earth.addEventListener("mouseout", unHoverEarth);
mars.addEventListener("mouseover", hoverMars);
mars.addEventListener("mouseout", unHoverMars);
jupiter.addEventListener("mouseover", hoverJupiter);
jupiter.addEventListener("mouseout", unHoverJupiter);
uranus.addEventListener("mouseover", hoverUranus);
uranus.addEventListener("mouseout", unHoverUranus);

function hoverSun(){
    
    return
}

function unHoverSun(){
    return
}

function hoverEarth(){
    const orbit=document.getElementById("earth");
    const container=document.querySelector("#earth .planet-container")
    const planet=earth
    orbit.style.animationPlayState="paused";
    container.style.animationPlayState="paused";
    planet.style.animationPlayState="paused";
    planet.style.transform="scale(1.5)"
    return
}

function unHoverEarth(){
    const orbit=document.getElementById("earth");
    const container=document.querySelector("#earth .planet-container")
    const planet=earth
    orbit.style.animationPlayState="running";
    container.style.animationPlayState="running";
    planet.style.animationPlayState="running";
    planet.style.transform="scale(1)"
    return
}

function hoverMars(){
    const orbit=document.getElementById("mars");
    const container=document.querySelector("#mars .planet-container")
    const planet=mars
    orbit.style.animationPlayState="paused"
    container.style.animationPlayState="paused"
    planet.style.animationPlayState="paused"
    planet.style.transform="scale(1.5)"
    return
}

function unHoverMars(){
    const orbit=document.getElementById("mars");
    const container=document.querySelector("#mars .planet-container")
    const planet=mars
    orbit.style.animationPlayState="running"
    container.style.animationPlayState="running"
    planet.style.animationPlayState="running"
    planet.style.transform="scale(1)"
    return
}

function hoverJupiter(){
    const orbit=document.getElementById("jupiter");
    const container=document.querySelector("#jupiter .planet-container")
    const planet=jupiter
    orbit.style.animationPlayState="paused"
    container.style.animationPlayState="paused"
    planet.style.animationPlayState="paused"
    planet.style.transform="scale(1.5)"
    return
}

function unHoverJupiter(){
    const orbit=document.getElementById("jupiter");
    const container=document.querySelector("#jupiter .planet-container")
    const planet=jupiter
    orbit.style.animationPlayState="running"
    container.style.animationPlayState="running"
    planet.style.animationPlayState="running"
    planet.style.transform="scale(1)"
    return
}

function hoverUranus(){
    const orbit=document.getElementById("uranus");
    const container=document.querySelector("#uranus .planet-container")
    const planet=uranus
    orbit.style.animationPlayState="paused"
    container.style.animationPlayState="paused"
    planet.style.animationPlayState="paused"
    planet.style.transform="scale(1.5)"
    return
}

function unHoverUranus(){
    const orbit=document.getElementById("uranus");
    const container=document.querySelector("#uranus .planet-container")
    const planet=uranus
    orbit.style.animationPlayState="running"
    container.style.animationPlayState="running"
    planet.style.animationPlayState="running"
    planet.style.transform="scale(1)"
    return
}

