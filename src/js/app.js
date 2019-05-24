import { scrollIntoView } from 'scroll-js';

document.querySelectorAll('.scroll-link').forEach(elem => {
	elem.addEventListener('click', event => {
		event.preventDefault();

		scrollIntoView(
			document.getElementById(event.target.dataset.scroll),
			document.body,
			{ behavior: 'smooth' }
		);
	});
});