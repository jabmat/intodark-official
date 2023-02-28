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

const loadYT = () => {
	const container = document.getElementById('yt-placeholder');

	if (container.getElementsByTagName('iframe').length) {
		return;
	}

	const iframe = document.createElement('iframe');

	iframe.setAttribute('src', 'https://www.youtube.com/embed/rtNhnGMhANs?autoplay=1');
	iframe.setAttribute('width', '560');
	iframe.setAttribute('height', '315');
	iframe.setAttribute('title', 'YouTube video player');
	iframe.setAttribute('frameborder', '0');
	iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
	iframe.setAttribute('allowfullscreen', '');
	iframe.style.width = '100%'

	container.innerHTML = '';
	container.appendChild(iframe);
}