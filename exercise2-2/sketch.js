let fillColor;
let x=300;
let y=300;
function setup(){
    
    fillColor= color(random(255),random(255), random(255));
createCanvas(600,600);
}
function draw(){
    background(0);
    fill(fillColor);
circle(x,y,300);
}
function keyPressed() {
 
if (key ==='w' || keyCode===UP_ARROW){
    y-= 5;
} if (key ==='s'|| keyCode===DOWN_ARROW){
    y+= 5;
} if (key ==='a'|| keyCode===LEFT_ARROW){
    x-= 5;
} if (key ==='d'||keyCode===RIGHT_ARROW){
    x += 5;
}
}

function mouseClicked(){
    fillColor= color(random(255),random(255), random(255));
}
