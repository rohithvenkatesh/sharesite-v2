let mouse = document.querySelector('.cursor');
let el = document.querySelectorAll('a');

// particles.js
window.onload = () => {
	particlesJS.load('particles', 'assets/particles.json');
};

window.addEventListener('mousemove', e => {
	mouse.setAttribute(
		'style',
		'top: ' + (e.pageY - scrollY) + 'px; left: ' + e.pageX + 'px'
	);
});

el.forEach(link => {
	link.addEventListener('mouseleave', () => {
		mouse.classList.remove('cursor-grow');
		link.classList.remove('link-color');
	});
	link.addEventListener('mouseenter', () => {
		mouse.classList.add('cursor-grow');
		link.classList.add('link-color');
	});
});
