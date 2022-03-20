canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 90;

backgroundImage = "surf.jpg";
roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    roverImageTag = new Image();
    roverImageTag.onload = uploadRover;
    roverImageTag.src = roverImage;
}
function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log("keypressed=" + keypressed);
    if (keypressed == 37) {
        left();
        console.log("left");
    }
    if (keypressed == 38) {
        up();
        console.log("up");
    }
    if (keypressed == 39) {
        right();
        console.log("right");
    }
    if (keypressed == 40) {
        down();
        console.log("down");
    }
}
function up(){
    if(roverY>=0){
       roverY=roverY-10;
       uploadBackground();
       uploadRover();
    }
}

function down(){
    if(roverY<=500){
       roverY=roverY+10;
       uploadBackground();
       uploadRover();
    }
}

function left(){
    if(roverX>=0){
       roverX=roverX-10;
       uploadBackground();
       uploadRover();
    }
}

function right(){
    if(roverX<=800){
       roverX=roverX+10;
       uploadBackground();
       uploadRover();
    }
}