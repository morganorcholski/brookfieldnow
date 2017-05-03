$(document).ready(function() {

	var images = ["feat1.jpg", "feat2.jpg", "feat3.jpg"];

	$("#pod").css({"background": "url(images/" + images[Math.floor(Math.random()*images.length)] +")"});
	$("#pod").css({"background-size": "100%"});
});