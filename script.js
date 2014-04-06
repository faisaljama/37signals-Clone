$(document).ready(function() {

    $('.button1').mouseenter(function() {
		$('.initialmessage').toggle();
		$('.basecamp').toggle();
    });
	$('.button1').mouseleave(function() {
		$('.initialmessage').toggle();
		$('.basecamp').toggle();
    });

    $('.button2').mouseenter(function() {
		$('.initialmessage').toggle();
		$('.highrise').toggle();
    });
	$('.button2').mouseleave(function() {
		$('.initialmessage').toggle();
		$('.highrise').toggle();
    });

    $('.button3').mouseenter(function() {
		$('.initialmessage').toggle();
		$('.campfire').toggle();
    });
	$('.button3').mouseleave(function() {
		$('.initialmessage').toggle();
		$('.campfire').toggle();
    });

});