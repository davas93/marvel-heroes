const showInfo = () => {
	const cards = document.querySelector('.cards');

	cards.addEventListener('mouseover', (event) => {
		let target = event.target;

		if (target.closest('.hero-card')) {
			const info = target
				.closest('.hero-card')
				.querySelector('.hero-info');

			info.style.opacity = '1';
		}
	});

	cards.addEventListener('mouseout', (event) => {
		let target = event.target;

		if (target.closest('.hero-card')) {
			const info = target
				.closest('.hero-card')
				.querySelector('.hero-info');

			info.style.opacity = '0';
		}
	});
};

export default showInfo;
