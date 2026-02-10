
let stars = [];
let numStars = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  noStroke();
 

  // generate stars once
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      inner: random(8, 18),
      outer: random(25, 50),
      points: int(random(4, 7)),
      rotSpeed: random(-0.02, 0.02),
      rot: random(TWO_PI),
      alpha: random(150, 255)
    });
  }
}

function draw() {
  background(0);

  for (let s of stars) {
    push();
    translate(s.x, s.y);
    rotate(s.rot);
    fill(255, 255, 255, s.alpha);
    star(0, 0, s.inner, s.outer, s.points);
    pop();

    s.rot += s.rotSpeed;
  }

  // Moon / eclipse
  fill(255);
  circle(400, 400, 250);
  fill(0);
  circle(350, 350, 175);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    vertex(
      x + cos(a) * radius2,
      y + sin(a) * radius2
    );
    vertex(
      x + cos(a + halfAngle) * radius1,
      y + sin(a + halfAngle) * radius1
    );
  }
  endShape(CLOSE);
}