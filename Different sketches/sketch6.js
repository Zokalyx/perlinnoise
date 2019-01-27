var inc = 0.1

function setup() {
	createCanvas(200,200)
	pixelDensity(1)
}

function draw() {
	loadPixels()
	var xoff = 0
	for (var x = 0; x < width;x++) {
		var yoff = 0
		for (var y = 0; y < height;y++) {
			var index = (x+y*width)*4
			pixels[index+0] = 255*noise(xoff,yoff)
			pixels[index+1] = 255*noise(xoff-width,yoff-height)
			pixels[index+2] = 255*noise(xoff+width,yoff+height)
			pixels[index+3] = 255
			yoff += inc
		}
		xoff += inc
	}
	updatePixels()
}

function mouseClicked() {
	noiseSeed(random(0,1000))
}