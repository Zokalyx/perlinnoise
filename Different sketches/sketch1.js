t = 0

function setup() {
	createCanvas(400,400)
	background(0)
	noStroke()
}

function draw() {
	translate(0,200)
	scale(1,-1)
	fill(256*noise(t))
	ellipse(10*t,300*noise(t)-150,5,5)
	if (t < 400) {
		t += 0.02
	}
}