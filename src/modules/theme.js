const theme = () => {
	const switchToggle = document.getElementById('switch'),
		body = document.querySelector('body'),
		main = document.querySelector('main'),
		select = document.querySelectorAll('.select-block'),
		dropdowns = document.querySelectorAll('.dropdown'),
		footer = document.querySelector('footer'),
		upBtn = document.querySelector('.scroll-up');

	switchToggle.addEventListener('change', () => {
		if (switchToggle.checked) {
			body.classList.add('light');
			main.classList.add('main-light');
			select.forEach((item) => {
				item.classList.add('select-block-light');
			});
			dropdowns.forEach((item) => {
				item.classList.add('dropdown-light');
			});
			footer.classList.add('footer-light');
			upBtn.classList.add('scroll-up-light');
		} else {
			body.classList.remove('light');
			main.classList.remove('main-light');
			select.forEach((item) => {
				item.classList.remove('select-block-light');
			});
			dropdowns.forEach((item) => {
				item.classList.remove('dropdown-light');
			});
			footer.classList.remove('footer-light');
			upBtn.classList.remove('scroll-up-light');
		}
	});
};

export default theme;
