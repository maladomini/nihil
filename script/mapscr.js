// Hint-fox animation
var foxes = new Array ("img/fox_waves.png", "img/fox.png", "img/fox_talks.png");
var index = 0;

$("#centraldiv").click(function rotateFoxes (){
	$("#fox").fadeOut( 300, function(){
		$(this).attr('src', foxes[index]);
		$(this).fadeIn( 300, function(){
			if (index == foxes.length-1)
				{ index = 0;}
			else
				{ index++; }
		});
	});
});	


//rand number 0 to size-1
function getRandomNumber(size)
{
	return Math.floor(Math.random() * size);
}

//distance from EVENT to TARGET
function getDistance(event, target)
{
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX*diffX) + (diffY*diffY));
}

//get distance hint

function getDistanceHint(distance)
{
 if (distance < 30) { return "Look around! (radius<30px)"}
 else if (distance < 40) { return "You are very close (radius<40px)"}
 else if (distance < 100) { return "You are close (radius<100px)"}
 else if (distance < 200 ) { return "You got the right direction (radius<200px)"}
 else if (distance < 300) { return "It's not here (radius<300px)"}
 else {return "Wrong > _ <"}	
}

//variables
var width = 600;
var height = 500;
var clicks = 0;
var clickLimits = 20;

//target position
var target = 
{
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};


//click handler for MAP img

$("#map").click(function (event){
	clicks++;

	if (clicks>clickLimits) {
		alert("GAME OVER. Press F5 to try again.");
		return;
	}

	//get distance from click to target
	var distance = getDistance(event, target);
	//get hint
	var distanceHint = getDistanceHint(distance);

	//write in DISTSNCE new hint
	$("#distance").text(distanceHint);

	// show available clicks
	$("#clicks-remaining").text((clickLimits - clicks) + " clicks available.");

	if (distance < 20) { alert("You have found a treasure with " + clicks + "clicks!")}

});
