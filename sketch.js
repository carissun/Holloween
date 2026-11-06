let img;
let state = 'start'
let y = 0;
let count = 0;
let t = 0;
let bat = {x : 240, y: 180};
let transition = false;
let bat_count = 0;
let title_load;
let startTime;
let duration = 9;



function setup() {
  title_load = false;
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

  if (state === 'intro') {
    if (transition) {
      playTransition();
      if (bat.x <= 480) { 
        bat.x += 3;
      } else {
        bat = {x: 180, y: 140};
        state = 'l1';
        transition = false;
        console.log('transition done')
      }
    } else {
      intro();
      bat.x += random(-2,2);
      bat.y += random(-2,2);
     }
    }

  if (state === 'l1') {
    if (transition) {
      playTransition();
      if (bat.x <= 480) { 
        bat.x += 3;
      } else {
        bat = {x: 180, y: 140};
        state = 'l2';
        transition = false;
        console.log('transition done');
        bat_count = 0;
      }
    } else {
        level_1();
     }
  }

  if (state === 'l2') {
    if (transition) {
      playTransition();
      if (bat.x <= 480) { 
        bat.x += 3;
      } else {
        bat = {x: 180, y: 140};
        state = 'l3';
        transition = false;
        console.log('transition done');
        bat_count = 0;
      }
    } else {
        level_2();
     }
  }

  if (state === 'l3') {
    if (transition) {
      playTransition();
      if (bat.x <= 480) { 
        bat.x += 3;
      } else {
        bat = {x: 180, y: 140};
        state = 'l4';
        transition = false;
        console.log('transition done');
        bat_count = 0;
      }
    } else {
        level_3();
     }
  }

  if (state === 'l4') {
      if (transition) {
        playTransition();
        if (bat.x <= 480) { 
          bat.x += 3;
        } else {
          bat = {x: 180, y: 140};
          state = 'notice';
          transition = false;
          console.log('transition done');
          bat_count = 0;
        }
      } else {
          level_4();
      }
    }

  if (state === 'notice') {
    notice();
  }

  if (state === 'bosslvl') {

    let elapsed = (millis() - startTime)/1000;
    let timeLeft = max(0 , duration - elapsed)
    if (timeLeft <= 0 && bat_count < 12) {
        state = 'game over';
        return
    } else if (timeLeft <= 0 && bat_count >= 12) {
      state = 'win';
    }
    bossLvl();
    bat.x += random(-2,2);
    bat.y += random(-2,2);
    fill(144,0,0);
    text('time:' + timeLeft, 10, 10)
  }

  if (state === 'win') {
    win()
  }

  if (state === 'game over') {
    gameOver();
  }
}

function start() {
    if (y > height) {
        y= 0;
        count ++;
    }

    if (count >= 3) {
      title_load = true;
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

function intro() {
  background(0);
  drawBat(bat.x, bat.y, 255);
  fill(255,0,0);
  text("you're late to halloween, now let's go run and fix the damage!", bat.x/2 , bat.y + 90);
}

function notice() {
  background(0);
  fill(255,0,0);
  text("the result of the sum of each term, reducing a digit each time from the original four digit number formed by previous levels, in 9s", 10, 10);
}

//levels
function level_1() {
  background(250);
  drawBat(bat.x, bat.y,0);
}

function level_2() {
  background(250);
  drawBat(bat.x, bat.y,0);
}

function level_3() {
  background(250);
  drawBat(bat.x, bat.y,0);
}

function level_4() {
  background(250);
  drawBat(bat.x, bat.y,0);
}

function bossLvl() {
  background(0);
  drawBat(bat.x, bat.y, 255);

}

function win() {
  background(0);
  text('win', 120, 150);
}

function gameOver() {
  background(0);
  text('game over', 120, 150);
}

function mousePressed() {
  if (state === 'start' && title_load === true) {
    state = 'intro';
  }

  else if (state === 'intro') {
    transition = true;
  }

  else if (state === 'l1') {

    if (dist(mouseX,mouseY, bat.x, bat.y) < 30) {
        bat_count++;
        switch (bat_count) {
            case 1:
              bat.x += 40;
              bat.y += 40;
              drawBat(bat.x, bat.y,0);
              break
            case 2:
              bat.x -= 40;
              bat.y += 40;
              drawBat(bat.x, bat.y,0);
              break
            case 3:
              bat.x += 40;
              bat.y += 40;
              drawBat(bat.x, bat.y,0);
              break
            case 4:
              bat.x -= 40;
              bat.y += 40;
              drawBat(bat.x, bat.y,0);
              break
            case 5:
              transition = true;
          }
        
        console.log(bat_count);
      
      }
    }

  else if (state === 'l2') {

  if (dist(mouseX,mouseY, bat.x, bat.y) < 30) {
      bat_count++;
      switch (bat_count) {
          case 1:
            bat.y += 60;
            drawBat(bat.x, bat.y,0);
            break
          case 2:
            bat.y += 60;
            drawBat(bat.x, bat.y,0);
            break
          case 3:
            bat.y += 60;
            drawBat(bat.x, bat.y,0);
            break
          case 4:
            transition = true;
        }
      
      console.log(bat_count);
    
    }
  }

  else if (state === 'l3') {

    if (dist(mouseX,mouseY, bat.x, bat.y) < 30) {
        bat_count++;
        switch (bat_count) {
            case 1:
              bat.y += 60;
              drawBat(bat.x, bat.y,0);
              break
            case 2:
              bat.y += 60;
              drawBat(bat.x, bat.y,0);
              break
            case 3:
              bat.y += 60;
              drawBat(bat.x, bat.y,0);
              break
            case 4:
              transition = true;
          }
        
        console.log(bat_count);
      
      }
  }

  else if (state === 'l4') {

    if (dist(mouseX,mouseY, bat.x, bat.y) < 30) {
        bat_count++;
        switch (bat_count) {
            case 1:
              bat.x -= 40;
              bat.y += 40;
              drawBat(bat.x, bat.y,0);
              break
            case 2:
              bat.x += 40;
              bat.y += 40;
              drawBat(bat.x, bat.y,0);
              break
            case 3:
              bat.x += 40;
              bat.y -= 40;
              drawBat(bat.x, bat.y,0);
              break
            case 4:
              transition = true;
          }
        
        console.log(bat_count);
      
      }
  }

  else if (state === 'notice') {
    state = 'bosslvl';
    bat_count = 0;
    startTime = millis();
  }

  else if (state === 'bosslvl') {
     if (dist(mouseX,mouseY, bat.x, bat.y) < 30) {
        bat.x = random(10,width - 10);
        bat.y = random(30,height - 30);
        bat_count++;
        drawBat(bat.x , bat.y);
     }

  }
}



function playTransition() {
  background(250);
  drawBat(bat.x, bat.y, 0);
  fill(0);
  triangle(420,bat.y + 70,460,bat.y - 80,450,bat.y + 60);
  triangle(450,bat.y + 60,460,bat.y - 80,480,bat.y + 100);
  triangle(450,bat.y + 60,480,bat.y - 70,480,bat.y + 100);
}

// bat
function drawBat(x,y,c) {
    fill(c);
    ellipse(x,y,10,10);
    triangle(x-15,y,x-25,y-15,x-5,y+5);
    triangle(x+15,y,x+25,y-15,x+5,y+5);
}

// title for start screen 
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
