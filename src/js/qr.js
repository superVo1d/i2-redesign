$(function() {
	let showCode = false;

	$('.code__close')
		.on('click', (e) => {
			e.preventDefault();
			$('.code').css('display', 'none');
			showCode = !showCode;
		});

	$('.person-code')
		.on('click', (e) => {
			e.preventDefault();
			$('.code').css('display', 'block');
			showCode = !showCode;
		});
});