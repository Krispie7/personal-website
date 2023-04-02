const initBackground = document.getElementById("initBackground")
const fadeInBackground = document.getElementById("fadeInBackground")
const startButton = document.getElementById("start")
const content=document.getElementById("content")

console.log(initBackground)
console.log(fadeInBackground)

function ooga(){
    console.log("red")
    initBackground.style.transform="translate(0%, -100%)";
    startButton.style.scale="0";
    content.style.display="block"
    return
}