const getData = () => {
	const cards = document.querySelector('.cards');

	fetch('https://marvel-4ee1f-default-rtdb.firebaseio.com/test.json')
		.then((response) => {
			if (response.status !== 200) {
				throw 'error';
			}
			return response.json();
		})
		.then((data) => {
			data.forEach((item) => {
				let info = '';

				Object.keys(item).forEach((key) => {
					console.log(item);

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
		})
		.catch((error) => {
			console.error(error);
		});
};

export default getData;
