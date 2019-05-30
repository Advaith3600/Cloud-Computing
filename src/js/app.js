import { scrollIntoView } from 'scroll-js';
import feather from 'feather-icons';

feather.replace();

document.querySelectorAll('.scroll-link').forEach(elem => {
	elem.addEventListener('click', event => {
		event.preventDefault();

		scrollIntoView(
			document.getElementById(elem.dataset.scroll),
			document.body,
			{ behavior: 'smooth' }
		);
	});
});