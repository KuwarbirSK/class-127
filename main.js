song_1 ="";
song_2 ="";

function prelaod(){

    song_1 = "song_1.mp3";
    song_2 = "song_2.mp3";
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}