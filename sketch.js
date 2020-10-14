let x = 1;
let y = 1;
let easing = 0.05;

let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom



function setup() {
  createCanvas(1000, 600);
  //background(255,0,133);
  background(255);
  strokeWeight(5);

  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;


}

function draw() {


       //background(0);
    // it draws as the mouse is moving without being pressed
      // if (!mouseIsPressed){
      //   ellipse(mouseX, mouseY, 20,20);
      // }
      if (mouseIsPressed){
        background(0);
        //background(0);
   // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
      }
else if(!mouseIsPressed) {

  // Draw the shape
  fill(290);
  textSize(24);
  text('1',600,400);
  text('2',900,50);
  text('1',100,100);
//  ellipse(10, 10, 5, 5);




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

  ellipse(x, y, 20, 20);
}

function keyTyped(){

    if (key === 's'){
      // save this image
      saveCanvas('fileName', 'png');

    }
    return false;
}
