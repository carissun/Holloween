let img;
let state = 'start'
let y = 0;
let count = 0;
let t = 0;


function setup() {
  img = loadImage('art/start.png');
  createCanvas(480, 360);
  angleMode('DEGREES');
  rectMode('CENTER');
  noStroke();
}

function draw() { 
  if (state === 'start') {
    start();
  }

  if (state === 'play') {
    background(0);
  }
}

function start() {
    if (y > height) {
        y= 0;
        count ++;
    }

    if (count >= 3) {
      background(0);
      t += randomGaussian(2, 1);
      translate(0, height / 6);
      testLetters();
    }
     else {
        stroke(0);
        line(0, y, width, y );
        background(img);
        y++;
    }
}

function mousePressed() {
  state = 'play';
}

function letters(l, w, r) {
  push();
  translate(0, w );
  s = w /9 + randomGaussian(0, w /20);

  fill(255 - random(30), 255 - random(30), 255 - random(10));
  t1 = t + r + random(-20, 20);

  if (l === "h") {
    t2 = -90 + 90 * sin(t1);
    circle((w / 3) * cos(t2), w / 2 + (w / 3) * sin(t2), s);
    circle(-w / 2 + (w / 2 - w / 3), (w / 1.2) * sin(t1), s);
    circle(w / 2 - (w / 2 - w / 3), w / 1.45 + (w / 6.5) * sin(t1), s);
  }

  if (l === "o") {
    circle((w / 3) * cos(t1), w / 2 + (w / 3) * sin(t1), s);
  }
 
  if (l === "l") {
    circle(0, (w / 1.2) * sin(t1), s);
  }

  if (l === "w") {
    t2 = 90 + 90 * sin(t1);
    circle(w / 4 + (w / 4) * cos(t2), w / 2 + (w / 3) * sin(t2), s);
    circle(-w / 4 - (w / 4) * cos(t2), w / 2 + (w / 3) * sin(t2), s);
    circle(w / 5.5 + w / 2 - (w / 2 - w / 3), w / 3 + (w / 6.5) * sin(t1), s);
    circle(-w / 5.5 - w / 2 + (w / 2 - w / 3), w / 3 + (w / 6.5) * sin(t1), s);
  }

  if (l === "e") {
    t2 = 190 - 140 * sin(t1);
    circle((w / 3) * cos(t2), w / 2 + (w / 3) * sin(t2), s);
    circle((-w / 4) * cos(t1), w / 3, s);
  }
  
  if (l === "n") {
    t2 = -90 + 90 * sin(t1);
    circle((w / 3) * cos(t2), w / 2 + (w / 3) * sin(t2), s);
    circle(-w / 2 + (w / 2 - w / 3), w / 2 + (w / 3) * sin(t1), s);
    circle(w / 2 - (w / 2 - w / 3), w / 1.45 + (w / 6.5) * sin(t1), s);
  }
  pop();
}

function testLetters() {
  w1 = 30;
  w2 = w1 * 1.6;
  push();
  translate(50, 80);
  letters("h", w1, 90);
  translate(w2, 0);
  letters("o", w1, 40);
  translate(w2, 0);
  letters("l", w1, 20);
  translate(w2, 0);
  letters("l", w1, 80);
  translate(w2, 0);
  letters("o", w1, 150);
  translate(w2, 0);
  letters("w", w1, 160);
  translate(w2, 0);
  letters("e", w1, 150);
  translate(w2, 0);
  letters("e", w1, 190);
  translate(w2, 0);
  letters("n", w1, 0);
  pop();
}
