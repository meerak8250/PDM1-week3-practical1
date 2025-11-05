<<<<<<< HEAD
let squareXCoord=300;
let squareYCoord=300;
let distFromCentre=450;
let move=5;

function setup(){
    createCanvas(600,600);
    rectMode(CENTER);
    fillColour= color(random(255),random(255),random(255),);
}
function draw(){
    background(0);
    fill(fillColour);
    square(squareXCoord,squareYCoord,distFromCentre);
}
    function keyPressed(){
        if(keyCode===UP_ARROW|| key==="w"){
            if(squareYCoord>distFromCentre){
                squareYCoord-=move;
            }
        }
        else if(keyCode===LEFT_ARROW|| key==="a"){
            if(squareXCoord>distFromCentre){
                squareXCoord-=move;
            }
        }
        else if(keyCode===RIGHT_ARROW|| key==="d"){
            if(squareXCoord<width-distFromCentre){
                squareXCoord+=move;
            }
        else if(keyCode===DOWN_ARROW|| key==="s"){
            if(squareYCoord<height-distFromCentre){
                squareYCoord+=move;
            }
        }    
        }
}
=======
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
>>>>>>> ac2372b21826ddd9f9fcfde609fbbdc021a43f12
