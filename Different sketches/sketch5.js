

function setup() {
	noStroke()
	createCanvas(400,400)
	textAlign(CENTER,CENTER)
	background(0)
	r = random()
	g = random()
	b = random()
}

function draw() {
	for (var x = 0; x < 400;x+=2) {
		for (var y = 0; y < 400;y+=2) {
			fill(r*256*noise(x/20)*noise(y/20),g*256*noise(x/20)*noise(y/20),b*256*noise(x/20)*noise(y/20))
			rect(x,y,2,2)
		}
	}
}

function mouseClicked() {

		noiseSeed(random(0,1000))
	
}