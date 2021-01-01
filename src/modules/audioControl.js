const audioControl = () => {
	const music = document.querySelector('.music'),
		range = document.querySelector('.range'),
		volume = document.querySelector('.volume-icon'),
		volumeStatus = volume.querySelector('use');

	music.volume = range.value / 100;

	range.addEventListener('input', () => {
		music.volume = range.value / 100;
		if (range.value == 0) {
			volumeStatus.setAttribute('xlink:href', '/sprite.svg#volume-off');
		} else {
			volumeStatus.setAttribute('xlink:href', '/sprite.svg#volume');
		}
	});

	volume.addEventListener('click', () => {
		if (music.volume !== 0) {
			music.volume = 0;
			range.value = 0;
			volumeStatus.setAttribute('xlink:href', '/sprite.svg#volume-off');
		} else {
			volumeStatus.setAttribute('xlink:href', '/sprite.svg#volume');
			range.value = 10;
			music.volume = range.value / 100;
		}
	});
};

export default audioControl;
