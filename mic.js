// Script made by /u/anothererror over on Reddit. Enjoy!
// Detects your microphone through your browser and overlays a video on top
// Great for having an inactive idle animation and then an active animation of your mouth moving when you speak

// First time setup? Check the README.txt that's supplied.

var mic; // sets the variable for the microphone for below
var active; // video to use when actively speaking
var inactive; // video to use when idle/not speaking

function setup(){
	createCanvas(700, 700); // draw the canvas size, feel free to increase the size as needed
	mic = new p5.AudioIn(); // listen for your microphone, uses the default microphone
	mic.start(); // don't touch, this is needed or it won't detect your mic
	
	active = createVideo('cat.webm'); // set your video when you ARE speaking
	active.play(); // play the video
	active.loop(); // loop the video
	inactive = createVideo('dog.webm'); // set your video when you AREN'T speaking
	inactive.play(); // play the video
	inactive.loop(); // loop the video
}
function draw(){ // this calls non-stop which is how this works
	
	vol = mic.getLevel(); // setting this for function on line 29
	background(0, 177, 64); // green chroma-key in RGB in case you need it
	image(inactive, 10, 10); // set the image on the chroma-key, 10 pixels from top, 10 pixels from left
	if (vol >= 0.000022) { // if volume is picked up - ADJUST THIS IF IT'S PICKING UP TOO MUCH OR NOT ENOUGH (min 0, max 1, can use any number inbetween)
		image(active, 10, 10); // draw the image when you ARE speaking, 10 pixels from top, 10 pixels from left
	}
}