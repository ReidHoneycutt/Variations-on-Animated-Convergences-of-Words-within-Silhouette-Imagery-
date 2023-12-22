let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let W = window.innerWidth;
let H = window.innerHeight;


function setup() {
  createCanvas(W, H);
  background(255);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  text(random(colorlist), random(W), random(H));
}


