const smoothScroll = () => {
	const arrowUp = document.querySelector('.scroll-up'),
		scrollTo = document.querySelector('.anchor-link');

	document.addEventListener('scroll', () => {
		if (window.scrollY >= 2000) {
			arrowUp.style.visibility = 'visible';
		} else {
			arrowUp.style.visibility = '';
		}
	});

	scrollTo.addEventListener('click', (e) => {
		e.preventDefault();

		document.querySelector('#heroes-section').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	});

	arrowUp.addEventListener('click', (e) => {
		e.preventDefault();

		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	});
};

export default smoothScroll;
