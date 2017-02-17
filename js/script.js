
var delay = 1000;
	var sessMin = 1;
	var breakMin = 5;
	var sessSecs = sessMin * 60;
	var isRunning = false;
	var timer;
$(document).ready(function () {
		
	function displayTime(time) {
		let mins = parseInt(time / 60);
		if (mins < 10) {
			mins = '0' + mins;
		}
		$('#mins').text(mins);
		let secs = time % 60;	
		if (secs < 10) {
			secs = '0' + secs;
		}
    	$('#secs').text(secs);
	}

	function countDown(time) {
		return function () { displayTime(--time); };	
	}

	function runTimer(time) {
      	timer = setInterval(countDown(time), delay);
	}

	// init timer values
	displayTime(sessSecs);
	$('#break-val').text(breakMin);
	$('#session-val').text(sessMin);

	// increment break by 1
	$('#add-br').click(function () {
		$('#break-val').text(++breakMin);
	});

	// decrease break by 1
	$('#sub-br').click(function () {
		$('#break-val').text(--breakMin);
	});

	// increase session by 1
	$('#add-sess').click(function () {
		$('#session-val').text(++sessMin);
		clearInterval(timer);
		sessSecs = sessMin * 60;
		displayTime(sessSecs);
	});

	// decrease session by 1
	$('#sub-sess').click(function () {
		$('#session-val').text(--sessMin);
		clearInterval(timer);
		sessSecs = sessMin * 60;
		displayTime(sessSecs);
	});

	// start and pause timer
	$('.timer').click(function () {
		if(isRunning) {
			isRunning = false;
			clearInterval(timer);
		} else {
			isRunning = true;
			runTimer(sessSecs);
		}	
	});

});

function orderMyLogic(val) {
if (val < 5 ) {
return "Less than 5";
}else if(val < 10){
return "less than 10";
}else {
return "Greater than or equal to 10";
}
}