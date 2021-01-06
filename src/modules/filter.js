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

				input.dispatchEvent(
					new CustomEvent('change', { detail: drop.id })
				);
			}
		});

		item.querySelector('input').addEventListener('change', (e) => {
			document.querySelectorAll('.hero-card').forEach((card, i) => {
				if ('gender' === e.detail) {
					window.filterGender = e.target.value.toLowerCase();
				}
				if ('species' === e.detail) {
					window.filterSpecies = e.target.value.toLowerCase();
				}
				if ('film' === e.detail) {
					window.filterFilm = e.target.value;
				}

				if (
					(window.cards[i].gender === window.filterGender ||
						window.filterGender === 'all' ||
						!window.filterGender) &&
					((window.cards[i].species &&
						window.cards[i].species.toLowerCase() ===
							window.filterSpecies) ||
						window.filterSpecies === 'all' ||
						!window.filterSpecies) &&
					((window.cards[i].movies &&
						window.cards[i].movies.indexOf(window.filterFilm) !==
							-1) ||
						window.filterFilm === 'All' ||
						!window.filterFilm)
				) {
					card.style.display = 'block';
				} else {
					card.style.display = 'none';
				}
			});
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
