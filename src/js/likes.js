$(function() {
	$('.like-btn')
		.on('click', function() {
			const showLikes = $(this).hasClass('show')
			
			if (showLikes) {
				$(this).find('.likes-list').css('display', 'none');
				$(this).removeClass('show');
			} else {
				$(this).find('.likes-list').css('display', 'block');
				$(this).addClass('show');
			}
		});
});