let x = 1;
let y = 1;
let easing = 0.05;


let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let noiseOffset = 0.0;
let strokeWidth = 1;


function setup() {

  createCanvas(1500, 600);
  //background(255,0,133);
  background(0);


  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  fill(255);
  textSize(34);
  text('Click to Start', 600, 300);

}

function draw() {
  background(0, 0, 0, 4);
  strokeWeight(strokeWidth);


  //background(0,0,0,20);
  // it draws as the mouse is moving without being pressed
  // if (!mouseIsPressed){
  //   ellipse(mouseX, mouseY, 20,20);
  // }

  noiseOffset += 0.04;
  strokeWidth = noise(noiseOffset) * 5;


  if (mouseIsPressed) {

    background(500);

    fill('#fcba03');

    // Update the position of the shape
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;


    // Draw the shape
    push();
    //fill(600);
    //textSize(24);
    fill('#8fffff');
    //ellipse(600, 400, 20, 20);
    ellipse(random(200), random(400), 15, 15);
    ellipse(random(300), random(500), 15, 15);
    ellipse(random(400), random(400), 15, 15);
    ellipse(random(500), random(500), 15, 15);
    ellipse(random(600), random(600), 15, 15);
    ellipse(random(700), random(600), 15, 15);
    ellipse(random(800), random(600), 15, 15);
    ellipse(random(900), random(600), 15, 15);
    ellipse(random(900), random(600), 15, 15);
    ellipse(random(900), random(600), 15, 15);
    ellipse(random(900), random(600), 15, 15);
    ellipse(random(1500), random(600), 15, 15);
    ellipse(random(1500), random(500), 15, 15);
    ellipse(random(1500), random(600), 15, 15);
    ellipse(random(1500), random(600), 15, 15);
    ellipse(random(1400), random(600), 15, 15);
    ellipse(random(1400), random(600), 15, 15);
    ellipse(random(1400), random(600), 15, 15);
    ellipse(random(1400), random(600), 15, 15);
    ellipse(random(1400), random(600), 15, 15);
    ellipse(random(1400), random(600), 15, 15);
    pop();

    //stroke(map(mouseX,0,600,0,255,true));
    //line(width-mouseX, height- mouseY, width-pmouseX, height-pmouseY); // width - makes it mirror the drawing
    //ellipse(mouseX, mouseY, pmouseX,pmouseY); // pmouseX is previous cursor
    // fill(0);
    //ellipse(mouseX, mouseY, 5,5); // pmouseX is previous cursor
  }

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  //fill('#b4f035');
  ellipse(x, y, 20, 20);
}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear the images

    clear();
  }
  return false;
}
