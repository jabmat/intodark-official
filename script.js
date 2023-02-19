// I. Playing on/off audio on button play-button -->
// 1. DOM elements variables
let playButton = document.getElementById('play-button');
let playIcon = document.getElementById('play-icon');

// 2. deklaracja funkcji warunkowej tworzącej i obsługującej plik audio;
const audioHandler = () => {
	if (document.getElementById('audio')) {
		audio.pause();
		playButton.removeChild(audio);
	} else {
		let audio = document.createElement('audio');
		audio.setAttribute('id', 'audio');
		audio.setAttribute('src', './audio/id-playbtn-song1.mp3');
		playButton.appendChild(audio);
		audio.play();
	}
};

// 3. onClick - switching icons using contains() + handling audio
playButton.addEventListener('click', () => {
	if (playIcon.classList.contains('icon-play3')) {
		playIcon.classList.remove('icon-play3');
		playIcon.classList.add('icon-pause2');
		audioHandler();
	} else {
		playIcon.classList.remove('icon-pause2');
		playIcon.classList.add('icon-play3');
		audioHandler();
	}
});
// <-- I. Playing on/off audio on button play-button
