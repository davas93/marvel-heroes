const filter = () => {
	const select = document.querySelectorAll('.select-block');

	select.forEach((item) => {
		item.addEventListener('click', (event) => {
			let target = event.target;
			let sibling = target.nextElementSibling;
			let id = sibling ? sibling.id : null;

			document.querySelectorAll('.dropdown').forEach((item) => {
				if (item.id !== id) {
					item.classList.remove('dropdown-active');
				}
			});

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

	document.addEventListener('click', (event) => {
		if (
			!event.target.closest('.select-block') ||
			event.target.classList.contains('dropdown-item')
		) {
			const drop = document.querySelectorAll('.dropdown');

			drop.forEach((item) => {
				item.classList.remove('dropdown-active');
			});
		}
	});
};

export default filter;
