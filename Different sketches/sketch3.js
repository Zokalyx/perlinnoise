t = 0

function setup() {
	createCanvas(400,400)
}

function draw() {
	background(256)
	noFill()
	beginShape()
	j = t
	for (var x = 0; x < 400; x ++) {
		vertex(x,400*noise(j))
		j+=0.05
	}
	endShape()
	t+=0.1
}