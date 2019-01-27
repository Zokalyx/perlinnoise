var strength = 1
var friction = 0.5

function Particle(posX,posY,r,g,b,a) {
	this.pos = createVector(posX,posY)
	this.vel = createVector(0,0)
	this.acc = createVector(0,0)
	this.red = r
	this.gre = g
	this.blu = b
	this.alp = a

	this.update = function() {
		this.pos.add(this.vel)
		this.vel.add(this.acc.sub(this.vel.mult(friction)))
		if (this.pos.x < 0) {
			this.pos.x = width
		}
		if (this.pos.x > width) {
			this.pos.x = 0
		}
		if (this.pos.y < 0) {
			this.pos.y = height
		}
		if (this.pos.y > height) {
			this.pos.y = 0
		}
	}

	this.applyForce = function(force) {
		this.acc = force.mult(strength)
	}

	this.show = function() {
		stroke(this.red,this.gre,this.blu,this.alp)
		strokeWeight(1)
		point(this.pos.x,this.pos.y)
	}
}