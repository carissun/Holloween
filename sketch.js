let bat = { x: 240, y: 180};
let state = 'start';
let score = 0;
let duration = 9;
let startTime;

function setup() {
    createCanvas(480,360);
    startTime = millis();
}

function draw() {  
    background(15,10,25);
    noStroke();
    drawMoon();
    drawGround();
    drawDetails();
    // start
    if (state === 'start') {
        fill(255);
        textSize(30);
        text("Click", 60,60);
        return
    }
    // over
    if (state === 'over') {
        fill(255);
        textSize(30);
        text("Game over, Click to Play", 50, 50 );
        return
    }
    //possession
    bat.x += random(-3,3);
    bat.y += random(-3,3);
    let elapsed = (millis() - startTime)/1000;
    let timeLeft = max(0 , duration - elapsed)
    if (timeLeft <= 0) {
        state = 'over';
        return
    }
    drawBat(bat.x, bat.y);
    fill(255);
    textSize(16);
    text("Score: " + score, 12,26);
    text("Time: " + ceil(timeLeft), 12, 40);
    
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
    if (state === 'start' || state === 'over') {
        state = 'play';
        score = 0;
        startTime = millis();
        drawBat();
        return
    }

    if (dist(mouseX,mouseY, bat.x, bat.y) < 30) {
        bat.x = random(10,width - 10);
        bat.y = random(30,height - 30);
        score++;
        drawBat(bat.x , bat.y);

    }
}
