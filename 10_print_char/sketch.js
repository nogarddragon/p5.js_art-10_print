let x = 0;
let y = 0;
let Qty=20
let size = 50;
let width = size*Qty;
let height = size*Qty;
//let c = createCanvas(1024,1024);

function setup() {
let c = createCanvas(width, height);
background(0);
strokeWeight(4);
stroke(255);
}

function draw() {



//triangle(x, y, x+size, y, x+size/2, y+size/2)
//line (10,20,50,60);

	if (random(1)> 0.5) {
	//fill ( 243, 156, 18 );
	//noStroke ();
	//rect(x, y, size, size );
	//ellipse(x+size/2, y+size/2, random(size));
	//	triangle(x, y, x+size, y, x+size/2, y+size*0.75);
	line (x, y, x+size, y+size);
	
		} else {
		//fill ( 93, 173, 226);
		//noStroke ();
		//rect(x, y, size, size );
		//ellipse(x+size/2, y+size/2, size/2);
		//triangle(x, y+size, x+size, y+size, x+size/2, y+size*0.25);
		line (x, y+size, x+size, y);
				}
x = x + size;

	if (x > width) {
	x = 0;
	y = y + size;
	} 
	if (y > height) {
	noLoop();
	noStroke();
	colorMode(HSB);
	fill(360,100,100,0.9);
	textSize(250);
	text('#SHI-PU', 10, height/2);
	saveCanvas('myCanvas', 'png');
	}
}