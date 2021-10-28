function preload(){
    clown_nose=loadImage("https://i.postimg.cc/T3H1Rj7g/8-87152-moustache-png-image-transparent-background-mustache-clipart.jpg");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses)
}

function gotPoses(result){
    if (result.length>0) {
        console.log(result);
        console.log("nose x = "+result[0].pose.nose.x);
        console.log("nose y = "+result[0].pose.nose.y);
    }
}

function modelloaded(){
    console.log("posenet is initialized");
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,100,45);
}

function take_snapshot(){
    save("myfilterimg.png");
}