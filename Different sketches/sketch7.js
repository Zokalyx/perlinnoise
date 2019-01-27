var particles = []
var time = 0
var dt = 0.01

function setup() {
	createCanvas(400,400)
	background(0)
	for (var x = 0; x < width; x+=5) {
		for (var y = 0; y < width; y+=5) {
			particles.push(new Particle(x,y,255*noise(x/100,y/100),255*noise(x/100+1000,y/100+1000),255*noise(x/100-1000,y/100-1000),5))
			//translate(x,y)
			//fill(0)
			//stroke(0)
			//line(0,0,findForce(x,y).x*5,findForce(x,y).y*5)
			//translate(-x,-y)
		}
	}
}

function draw() {
	
	for (var i = 0; i < particles.length; i++){
		var xval = particles[i].pos.x;
		var yval = particles[i].pos.y;
		particles[i].applyForce(findForce(xval, yval));
		particles[i].update();
		particles[i].show();
	}
	time += dt
}

function findForce(xv,yv) {
	//var rx = cos(3.14/2/width*xv)
	//var ry = cos(3.14/2/width*yv)
	return (p5.Vector.fromAngle(4*6.28*noise(xv/100,yv/100,time)))
}

function mouseClicked() {
	background(0)
	noiseSeed(random(0,1000))
}