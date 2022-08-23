document.addEventListener('DOMContentLoaded', function () {
	openKebab();
	deleteStyle();

});


function openKebab() {
	const personal = document.querySelector('.header__personal');
	const kebabMenu = document.querySelector('.header__kebab-menu');

	kebabMenu.addEventListener('click', openMenu);

	function openMenu(e) {
		kebabMenu.classList.toggle('active');
		personal.classList.toggle('active');
		personal.classList.toggle('close');
	}
}

function deleteStyle() {
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) {
			const elem = document.querySelector('.header__personal[style]');

			if (elem) {
				elem.removeAttribute('style');
				document.querySelector('.header__personal').classList.remove('active');
				document.querySelector('.header__personal').classList.add('close');
			}
		}
	}

	mql = window.matchMedia('all and (min-width: 768px)');
	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia);

}









