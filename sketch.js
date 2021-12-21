let getColor;

function preload() {
	colorWheel = loadImage("colorwheel.png");
}

function setup() {
	//createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  createCanvas(400,250)
}

function draw() {
	background(225);
	push();
	image(colorWheel, 10, 20);
	getColor = colorWheel.get(mouseX-10, mouseY-20);

	push();
	//stroke(getColor[0], getColor[1], getColor[2]);
	fill(getColor[0], getColor[1], getColor[2], 255);
	ellipse(width * 0.75, height * 0.35, 100, 100);
	pop();


	fill(getColor);
	ellipse(mouseX, mouseY, 33, 33);
	pop();

	push();
	fill(0);
	noStroke();
	textSize(33);
	textFont('Source Code Pro');
	textAlign(CENTER, CENTER);
	textStyle(BOLD);
	text(getColor.slice(0,3), width * 0.75, height * 0.65);
    r = hex(getColor[0],2)
    g = hex(getColor[1],2)
    b = hex(getColor[2],2)
    hx = '#' + r + g + b
    text(hx, width * 0.75, height * 0.8);
	pop();


}