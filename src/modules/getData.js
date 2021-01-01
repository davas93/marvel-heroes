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
				const heroCard = `<div class="hero-card">
						<img src="https://raw.githubusercontent.com/Quper24/dbHeroes/master/${item.photo}" alt="${item.name}" class="hero-photo" />
						<div class="hero-info">
							<div class="hero-label">
								<span class="key">Name:</span>
								<span class="key">Real name:</span>
								<span class="key">Species:</span>
								<span class="key">Citizenship:</span>
								<span class="key">Gender:</span>
								<span class="key">Birthday:</span>
                                <span class="key">Actors:</span>
                                <span class="key">Status:</span>
								<span class="key">Movies:</span>
							</div>
							<div class="hero-descr">
								<span class="sense" id="name">${item.name}</span>
								<span class="sense" id="real-name">${item.realName}</span>
								<span class="sense" id="species">${item.species}</span>
								<span class="sense" id="citizenship">${item.citizenship}</span>
								<span class="sense" id="gender">${item.gender}</span>
								<span class="sense" id="birthday">${item.birthDay}</span>
                                <span class="sense" id="actors">${item.actors}</span>
                                <span class="sense" id="status">${item.status}</span>
								<span class="sense" id="movies">${item.movies}</span>
							</div>
						</div>
                    </div>`;

				cards.insertAdjacentHTML('beforeend', heroCard);
			});
		})
		.catch((error) => {
			console.error(error);
		});
};

export default getData;
