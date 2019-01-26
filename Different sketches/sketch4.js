var n = 50 //Angular frequency
var s1 = 50 //Smoothness 1
var s2 = 50 //Smoothness 2
var t = 0
var speed = 50 //Speed of animation

function setup() {
	createCanvas(400,800)
	textAlign(CENTER,CENTER)
}

function draw() {
	na = round(map(n,50,270,1,50))
	s1a = map(s1,50,270,0,100)
	s2a = map(s2,50,270,0,200)
	speeda = map(speed,50,270,0,1)
	background(256)
	fill(256*noise(t),256*noise(t+1000),256*noise(t+2000))
	push()
	translate(200,200)
	stroke(0)
	strokeWeight(5*noise(t-100))
	beginShape()
	for (var x = 0; x < 6.28; x += 0.01) {
		var r1 = s1a*sin(na*x/2)
		var r = s2a + (200-s2)*noise(r1-t)
		var theta = x
		vertex(r*cos(theta),r*sin(theta))
	}
	endShape()
	pop()
	fill(200)
	rect(50,400+20,300,80)
	fill(0)
	text("Angular Frequency",200,400+20+40)
	fill(200)
	rect(n,400+20,80,80)
	rect(50,400+120,300,80)
	fill(0)
	text("Smoothness 1",200,400+120+40)
	fill(200)
	rect(s1,400+120,80,80)
	rect(50,400+220,300,80)
	fill(0)
	text("Smoothness 2",200,400+220+40)
	fill(200)
	rect(s2,400+220,80,80)
	rect(50,400+320,300,80)
	fill(0)
	text("Speed of Animation",200,400+320+40)
	fill(200)
	rect(speed,400+320,80,80)
	if (mouseIsPressed && mouseY > 400 && mouseX > 90 && mouseX < 310) {
		if (mouseY > 420 && mouseY < 500) {
			n = mouseX - 40
		}
		if (mouseY > 520 && mouseY < 600) {
			s1 = mouseX - 40
		}
		if (mouseY > 620 && mouseY < 700) {
			s2 = mouseX - 40
		}
		if (mouseY > 720 && mouseY < 800) {
			speed = mouseX - 40
		}
	}
	t += speeda
}

function mouseClicked() {
	if (mouseY < 400) {
		noiseSeed(random(0,1000))
	}
}