let video;
let button;
let myFont;

function preload() {
  myFont = loadFont("../assets/monogram.ttf")
}

function setup() {
  noCanvas()
  video = createVideo(['../assets/video/Jump.mov']);
  video.size(1000, 600);
}

function draw() {
}

// Jump button
button = document.querySelector(".jumpButton")

button.addEventListener("click", () => {
  toggleVid()
  document.querySelector("#tanyaJump").style.display = "none";
})

// plays the video when called
function toggleVid() {
    video.play();
    setTimeout(function() {
      window.location.replace("../html/gameover.html")
   }, 24000)
}