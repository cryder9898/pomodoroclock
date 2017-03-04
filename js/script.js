$(document).ready(function () {

	var delay = 1000,
		sessMin = 20,
		breakMin = 5,
		secsLeft = 20 * 60,
        totalSecs = secsLeft,
		isRunning = false,
		isSession = true,
		timer;
		
    var displayTime = function(time) {
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

	var resetTimer = function() {
        $('#sand').css('height', '0px');
        isRunning = false;
		clearInterval(timer);
		totalSecs = secsLeft = sessMin * 60;
		displayTime(secsLeft);
	}

	//  starts infinite countdown, switch between work and break
	var runTimer = function() {
      	timer = setInterval(function () {
      		displayTime(secsLeft--);
            
            // calculates and updates the height of the sand based upon the secsLeft.  Does not look smooth....
            $('#sand').height(function() {
                return Math.abs((secsLeft/totalSecs) * 100 - 100) + '%';
            });

      		if (isSession) {
				$('#switch').text('Do Some Work!');
			} else {
				$('#switch').text('Break Time!');
			}
            
            // end of worktime, switch to break
			if (secsLeft === -1 && isSession) {
                fill = 0;
				totalSecs = secsLeft = breakMin * 60;
				isSession = !isSession;
			}
            
            // end of breaktime, switch to work
			if (secsLeft === -1 && !isSession) {
				totalSecs = secsLeft = sessMin * 60;
				isSession = !isSession;
			}
		}, delay);
	}

	// init timer values
	displayTime(secsLeft);
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

	// increment break by 1 min
	$('#add-br').click(function () {
		$('#break-val').text(++breakMin);
	});

	// decrease break by 1 min
	$('#sub-br').click(function () {
        if (breakMin > 1) {
            $('#break-val').text(--breakMin);
        }
	});

	// increase session by 1 min
	$('#add-sess').click(function () {
        isSession = true;
		$('#session-val').text(++sessMin);
        $('#switch').text('');
		resetTimer();
	});

	// decrease session by 1 min
	$('#sub-sess').click(function () {
        isSession = true;
        if (sessMin > 1) {
            $('#session-val').text(--sessMin);
        } 
        $('#switch').text('');
		resetTimer();
	});

});