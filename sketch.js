let bat = { x: 240, y: 180};

function setup() {
    createCanvas(480,360);
}

function draw() {  
    background(15,10,25);
    noStroke();
    drawMoon();
    drawGround();
    drawDetails();
    //possession
    bat.x += random(-3,3);
    bat.y += random(-3,3);
    drawBat(bat.x, bat.y);
    //
}

function drawBat(x, y) {
    fill(255);
    ellipse(x,y,10,10);
    triangle(x-15,y,x-25,y-15,x-5,y+5);
    triangle(x+15,y,x+25,y-15,x+5,y+5);
}

function drawMoon() {
    fill(255,200,100);
    ellipse(400,60,50,50);
}

function drawGround() {
    fill(40,30,50);
    ellipse(0,330,930,60);
}

function drawDetails() {
    fill(255,0,0);
    triangle(440,320,480,330,480,325);
    fill(0,0,0);
    triangle(270,360,480,360,480,325);
}

function mousePressed() {
    if (dist(mouseX,mouseY, bat.x, bat.y) < 30) {
        bat.x += random(-100,100);
        bat.y += random(-100,100);
        drawBat(bat.x , bat.y);
    }
}
