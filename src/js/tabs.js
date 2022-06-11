$(function() {
	const tabs = $('.mobile-tabs');
	const tab = $('.tab');
	const tabsInfo = $('.mobile-tabs__info');

	tab.each(function(index) {
		$(this)
			.on('click', (e) => {
				e.preventDefault();

				const $this = this;

				tab.each(function() {
					if (this !== $this) {
						$(this).removeClass('active');
					}
				});

				$(this).addClass('active');
				setTab(index)
			});
	});

	function setTab(tabNumber) {
		tabsInfo
			.each(function(index) {
				if (tabNumber !== index) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
				}
			});
	}

	setTab(0);
});