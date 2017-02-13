$(document).ready(function () {
	var delay = 1000;
	var totalSeconds = 25 * 60;
	var breakMin = 5;
	var sessMin = 25;
	var isRunning = false;
	var timer;

	var setTime = function () {	
    	$('#secs').text(totalSeconds % 60);
    	$('#mins').text(parseInt(totalSeconds / 60));
    	totalSeconds--;
	};

	var startSess = function () {
		if (!timer) {
      		timer = setInterval(setTime, delay);
    	}
	};

	$('.timer').click(function () {
		if(isRunning) {
			isRunning = false;
			clearInterval(timer);
		} else {
			isRunning = true;
			startSess();
		}	
	})

});
	