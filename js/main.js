const mainMenu = document.getElementById('main-menu');
const navBar = document.getElementById('navbar');

// fixing auto toggle problem
let mainMenuToggle = true;

//
document.getElementById('hamburger-menu').addEventListener('click', () => {
	mainMenu.classList.toggle('show-main-menu');
	navBar.classList.toggle('navbar-background');
	mainMenuToggle = !mainMenuToggle;
});

window.addEventListener('scroll', () => {
	if (
		document.body.scrollTop > 150 ||
		document.documentElement.scrollTop > 150
	) {
		if (mainMenuToggle) {
			mainMenu.classList.add('show-main-menu');
			navBar.classList.add('navbar-background');
		}
	} else {
		if (mainMenuToggle) {
			mainMenu.classList.remove('show-main-menu');
			navBar.classList.remove('navbar-background');
		}
	}
});
