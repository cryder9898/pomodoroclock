$(document).ready(function () {

	var delay = 1000,
		sessMin = 1,
		breakMin = 1,
		totalSecs = 5,
		isRunning = false,
		isSession = true, // not done yet. for break/session switch
		timer;
		
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

	resetTimer = function() {
		clearInterval(timer);
		totalSecs = sessMin * 60;
		displayTime(totalSecs);
	}

	//  starts countdown
	runTimer = function() {
      	timer = setInterval(function () {
      		displayTime(--totalSecs);

      		if (isSession) {
				$('#switch').text('Working');
			} else {
				$('#switch').text('Break');
			}
			if (totalSecs === 0 && isSession) {
				totalSecs = breakMin * 60;
				isSession = !isSession;
			}
			if (totalSecs === 0 && !isSession) {
				totalSecs = sessMin * 60;
				isSession = !isSession;
			}
		}, delay);
	}

	// init timer values
	displayTime(totalSecs);
	$('#break-val').text(breakMin);
	$('#session-val').text(sessMin);

	// start and pause timer
	$('.timer').click(function () {
		if(isRunning) {
			isRunning = false;
			$('#switch').text('Paused');
			clearInterval(timer);
		} else {
			isRunning = true;
			runTimer();
		}	
	});

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
		resetTimer();
	});

	// decrease session by 1
	$('#sub-sess').click(function () {
		$('#session-val').text(--sessMin);
		resetTimer();
	});

});