canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=25;
rover_y=25;
function add(){
    bg_imgTag=new Image();
    bg_imgTag.onload=uploadbackground;
    bg_imgTag.src=background_image;

    r_imgTag=new Image();
    r_imgTag.onload=uploadrover;
    r_imgTag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(r_imgTag,rover_y,rover_x,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log(rover_x,rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log(rover_x,rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log(rover_x,rover_y);
        uploadbackground();
        uploadrover();
    }
}function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log(rover_x,rover_y);
        uploadbackground();
        uploadrover();
    }
}