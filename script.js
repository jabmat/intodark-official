// I. Playing on/off audio on button play-button -->
// 1. DOM elements variables
const playIcon = document.getElementById('play-icon');
const audioElement = document.getElementById('audio');

// 2. onClick - switching icons using contains() + handling audio
const playMusic = () => {
	if (audioElement.paused) {
		playIcon.classList.remove('icon-play3');
		playIcon.classList.add('icon-pause2');
		audioElement.play();
	} else {
		playIcon.classList.remove('icon-pause2');
		playIcon.classList.add('icon-play3');
		audioElement.pause();
	}
};
// <-- I. Playing on/off audio on button play-button
