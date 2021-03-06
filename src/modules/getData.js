const getData = () => {
	const cards = document.querySelector('.cards');

	fetch('https://marvel-4ee1f-default-rtdb.firebaseio.com/test.json')
		.then((response) => {
			cards.innerHTML = `<div class="overlay">
						<div class="spinner center">
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
							<div class="spinner-blade"></div>
						</div>
					</div>`;
			if (response.status !== 200) {
				throw new Error('status network not 200');
			}
			return response.json();
		})
		.then((data) => {
			window.cards = data;

			document.querySelector('.overlay').remove();

			data.forEach((item) => {
				let info = '';

				Object.keys(item).forEach((key) => {
					let value = item[key];
					if (value && key !== 'photo') {
						info += `<div class="hero-data">
							<span class="label">${key}:</span>
							<span class="sense">${value}</span>
						</div>`;
					}
				});

				const heroCard = `<div class="hero-card">
						<img src="https://raw.githubusercontent.com/Quper24/dbHeroes/master/${item.photo}" alt="${item.name}" class="hero-photo" />
						<div class="hero-info">${info}</div>
                    </div>`;

				cards.insertAdjacentHTML('beforeend', heroCard);
			});

			const createFilterByMovies = () => {
				const film = document.getElementById('film');

				const result = data.map(({ movies }) => movies);
				const merged = [].concat.apply([], result);
				const unique = Array.from(new Set(merged)).sort();

				unique.forEach((item) => {
					if (item !== undefined) {
						film.insertAdjacentHTML(
							'beforeend',
							`<li class="dropdown-item">${item}</li>`
						);
					}
				});
			};
			createFilterByMovies();

			const createFilterByGender = () => {
				const gender = document.getElementById('gender');

				const result = data.map(({ gender }) => gender);
				const merged = [].concat.apply([], result);
				const unique = Array.from(new Set(merged)).sort();

				unique.forEach((item) => {
					if (item !== undefined) {
						gender.insertAdjacentHTML(
							'beforeend',
							`<li class="dropdown-item">${item}</li>`
						);
					}
				});
			};
			createFilterByGender();

			const createFilterBySpecies = () => {
				const species = document.getElementById('species');

				const result = data.map(({ species }) => species);
				const merged = [].concat.apply([], result);
				const unique = Array.from(new Set(merged)).sort();

				unique.forEach((item) => {
					if (item !== undefined) {
						species.insertAdjacentHTML(
							'beforeend',
							`<li class="dropdown-item">${item}</li>`
						);
					}
				});
			};
			createFilterBySpecies();
		})
		.catch((error) => {
			cards.innerHTML = `<div class="status-message">
						<svg class="error">
							<use xlink:href="sprite.svg#error"></use>
							<span class="message">
								Server not available, please try later
							</span>
						</svg>
					</div>`;
			console.error(error);
		});
};

export default getData;
