t = 0

function setup() {
	createCanvas(400,400)
	noStroke()
	background(0)
}

function draw() {

	translate(200,200)
	fill(256*noise(t),256*noise(t+100),256*noise(t+200))
	ellipse(400*noise(t+50)-200,400*noise(t+150)-200,50*noise(t+300),50*noise(t+300))
	t+=0.02
}