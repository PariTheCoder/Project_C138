img = "";
status = "";

function preload() {
    img = loadImage('wolf_fox.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Wolf", 50, 75);
    noFill();
    stroke("#FF0000");
    rect(100, 30, 450, 350);

    fill("#FF0000");
    text("Fox", 320, 220);
    noFill();
    stroke("#FF0000");
    rect(300, 200, 270, 220);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}