$(document).ready(function () {
	var sec = 1000;
	var i = 1
	var count = setInterval(function () {
		$('#clock').text(i++);
	}, sec);
});
