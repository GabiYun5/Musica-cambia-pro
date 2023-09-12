function preload(){
    cancion = loadSound("MilkCartoon.mp3")
}

function setup(){
    canvas = createCanvas(640, 480)
    canvas.parent("canvas")
    video = createCapture(VIDEO)
    video.hide()
    pose = ml5.poseNet(video, mensaje("pose net listo"))
    pose.on("pose", res)
}

function mensaje(m){
    console.log(m);
}

var miy = 0;
var mix = 0;
var mdy = 0;
var mdx = 0;

function res (Res) {
    if (Res[0]) {
        miy = Res[0].pose.leftWrist.y
        mix = Res[0].pose.leftWrist.x
        mdy = Res[0].pose.rightWrist.y
        mdx = Res[0].pose.rightWrist.x
    } else {
        console.log("nada D:");
    }
}

function draw(){
    image(video, 0, 0, 640, 480)
    fill("blue")
    circle(mix, miy, 10)
    fill("red")
    circle(mdx, mdy, 10)
}


function play(){
    cancion.play()
    cancion.rate(3)
    document.getElementById("Pause").style.display = "inline-block"
    document.getElementById("Play").style.display = "none"
}

function pause(){
    cancion.pause()
    document.getElementById("Play").style.display = "inline-block"
    document.getElementById("Pause").style.display = "none"
}