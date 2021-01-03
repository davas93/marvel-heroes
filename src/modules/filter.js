const filter = () => {
	const select = document.querySelectorAll('.select-block');

	select.forEach((item) => {
		item.addEventListener('click', (event) => {
			let target = event.target;

			const drop = item.querySelector('.dropdown'),
				input = item.querySelector('input');
			drop.classList.toggle('dropdown-active');

			if (target.matches('li')) {
				input.value =
					target.textContent.charAt(0).toUpperCase() +
					target.textContent.slice(1);
			}
		});
	});
};

export default filter;
