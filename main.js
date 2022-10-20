MustacheX = 0;
MustacheY = 0;

function preload() {
Mustache = loadImage("https://i.postimg.cc/K4StP35r/mustache-png-image-pngpix-6.png")
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoad);
poseNet.on("pose", gotPoses);
}

function draw() {

}

function take_snapshot() {
save("ImageWithMustache.png");
}