const initBackground = document.getElementById("initBackground")
const fadeInBackground = document.getElementById("fadeInBackground")
const startButton = document.getElementById("startButton")
const content=document.getElementById("content")


function ooga(){
    initBackground.style.transform="translate(0%, -100%)";
    startButton.style.scale="0";
    content.style.display="block"
    fadeInBackground.style.opacity="0"
    return
}
