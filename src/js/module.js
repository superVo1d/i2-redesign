$(function() {
	$('.module__close')
		.on('click', function(e) {
			e.preventDefault();

			const $this = $(this);

			$this.closest('.module').css('display', 'none');
		});

	$('.module__open')
		.on('click', function(e){
			e.preventDefault();

			const m = $(this).data().module;
			const $m = $(`.${m}`);

			$m.css('display', 'block');
		});
});