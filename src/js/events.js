$(function() {
	$('.event')
		.on('mouseover', function(e) {
			$(this).addClass('active');
		})
		.on('mouseleave', function(e) {
			$(this).removeClass('active');
		});
});