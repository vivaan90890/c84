canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
console.log(random_no);
car1_width=100;
car1_height=90;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=100;
car2_height=90;
car2_image="car2.png";
car2_x=10;
car2_y=10;
function add(){
background_img_Tag=new Image();
background_img_Tag.onload=uplodBackground;
background_img_Tag.src=background_image;
car1_img_tag=new Image();
car1_img_tag.onload=uploadRover;
car1_img_tag.src=rover_image;
}
function uplodBackground(){
ctx.drawImage(background_img_Tag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='38'){
up();
console.log("up");
}
if(keypressed=='40'){
down();
console.log("down");
}
if(keypressed=='37'){
left();
console.log("left");
}
if(keypressed=='39'){
right();
console.log("right");
}
}
function uplodBackground(){
    ctx.drawImage(background_img_Tag,0,0,canvas.width,canvas.height);
    }
    function uploadRover(){
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='87'){
    w();
    console.log("w");
    }
    if(keypressed=='65'){
    a();
    console.log("a");
    }
    if(keypressed=='83'){
    s();
    console.log("s");
    }
    if(keypressed=='68'){
    d();
    console.log("d");
    }
    }
function up(){
if(rover_y>=0){
rover_y =rover_y-10;
console.log("when up arrrow is pressed x="+rover_x+"y="+rover_y);
uploadRover();
uplodBackground();
}

}
function down(){
if(rover_y<=500){
rover_y =rover_y+10;
console.log("when down arrow is pressed x="+rover_x+"y="+rover_y);
uploadRover();
uplodBackground();
}
}
function left(){
if(rover_x>=0){
rover_x =rover_x-10;
console.log("when left arrow is pressed x="+rover_x+"y="+rover_y);
uploadRover();
uplodBackground();
}
}
function right(){
if(rover_x<=700){
rover_x =rover_x+10;
console.log("when right arrow is pressed x="+rover_x+"y="+rover_y);
uploadRover();
uplodBackground();
}
}