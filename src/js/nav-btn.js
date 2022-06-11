$(function() {
	const maxTop = 54;

	$(window)
		.on('scroll', (e) => {
			const scrollTop = $(window).scrollTop()

			if (scrollTop <= maxTop) {
				$('.nav-btn').css('top', `calc(${maxTop - scrollTop}px + 2rem)`);
			} else {
				$('.nav-btn').css('top', `calc(${0}px + 2rem)`);
			}
		});
});