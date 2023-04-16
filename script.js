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
sun.addEventListener("mouseout", unHoverSun);
earth.addEventListener("mouseover", hoverEarth);
earth.addEventListener("mouseout", unHoverEarth);
mars.addEventListener("mouseover", hoverMars);
mars.addEventListener("mouseout", unHoverMars);
jupiter.addEventListener("mouseover", hoverJupiter);
jupiter.addEventListener("mouseout", unHoverJupiter);
uranus.addEventListener("mouseover", hoverUranus);
uranus.addEventListener("mouseout", unHoverUranus);

function hoverSun(){
    const planetText=document.querySelector("#sun .planetText")
    planetText.style.opacity="1"
    return
}

function unHoverSun(){
    const planetText=document.querySelector("#sun .planetText")
    planetText.style.opacity="0"
    return
}

function hoverEarth(){
    const orbit=document.getElementById("earth");
    const container=document.querySelector("#earth .planet-container")
    const planet=earth
    const planetText=document.querySelector("#earth .planetText")
    orbit.style.animationPlayState="paused";
    container.style.animationPlayState="paused";
    planet.style.animationPlayState="paused";
    planet.style.transform="scale(1.3)"
    planetText.style.opacity="1"
    return
}

function unHoverEarth(){
    const orbit=document.getElementById("earth");
    const container=document.querySelector("#earth .planet-container")
    const planet=earth
    const planetText=document.querySelector("#earth .planetText")
    orbit.style.animationPlayState="running";
    container.style.animationPlayState="running";
    planet.style.animationPlayState="running";
    planet.style.transform="scale(1)"
    planetText.style.opacity="0"
    return
}

function hoverMars(){
    const orbit=document.getElementById("mars");
    const container=document.querySelector("#mars .planet-container")
    const planet=mars
    const planetText=document.querySelector("#mars .planetText")
    orbit.style.animationPlayState="paused"
    container.style.animationPlayState="paused"
    planet.style.animationPlayState="paused"
    planet.style.transform="scale(1.3)"
    planetText.style.opacity="1"
    return
}

function unHoverMars(){
    const orbit=document.getElementById("mars");
    const container=document.querySelector("#mars .planet-container")
    const planet=mars
    const planetText=document.querySelector("#mars .planetText")
    orbit.style.animationPlayState="running"
    container.style.animationPlayState="running"
    planet.style.animationPlayState="running"
    planet.style.transform="scale(1)"
    planetText.style.opacity="0"
    return
}

function hoverJupiter(){
    const orbit=document.getElementById("jupiter");
    const container=document.querySelector("#jupiter .planet-container")
    const planet=jupiter
    const planetText=document.querySelector("#jupiter .planetText")
    orbit.style.animationPlayState="paused"
    container.style.animationPlayState="paused"
    planet.style.animationPlayState="paused"
    planet.style.transform="scale(1.3)"
    planetText.style.opacity="1"
    return
}

function unHoverJupiter(){
    const orbit=document.getElementById("jupiter");
    const container=document.querySelector("#jupiter .planet-container")
    const planet=jupiter
    const planetText=document.querySelector("#jupiter .planetText")
    orbit.style.animationPlayState="running"
    container.style.animationPlayState="running"
    planet.style.animationPlayState="running"
    planet.style.transform="scale(1)"
    planetText.style.opacity="0"
    return
}

function hoverUranus(){
    const orbit=document.getElementById("uranus");
    const container=document.querySelector("#uranus .planet-container")
    const planet=uranus
    const planetText=document.querySelector("#uranus .planetText")
    orbit.style.animationPlayState="paused"
    container.style.animationPlayState="paused"
    planet.style.animationPlayState="paused"
    planet.style.transform="scale(1.3)"
    planetText.style.opacity="1"
    return
}

function unHoverUranus(){
    const orbit=document.getElementById("uranus");
    const container=document.querySelector("#uranus .planet-container")
    const planet=uranus
    const planetText=document.querySelector("#uranus .planetText")
    orbit.style.animationPlayState="running"
    container.style.animationPlayState="running"
    planet.style.animationPlayState="running"
    planet.style.transform="scale(1)"
    planetText.style.opacity="0"
    return
}

let scrollRef=0;

window.addEventListener('scroll', function(){
    scrollRef <=0 ? scrollRef++: AOS.refresh();
})

/* Rocket Launch */
const rocket=document.getElementById("rocket");
const rocketThrust=document.getElementById("rocketThrust")
function rocketLaunch(){
    rocket.style.position="relative"
    rocket.style.transform="translate(15vh, -110vh) rotate(8.5deg)"
    setTimeout(githubRedirect, 6000)
    rocketThrust.style.display="block"
}

function githubRedirect(){
    document.location.href="https://github.com/Krispie7";
}