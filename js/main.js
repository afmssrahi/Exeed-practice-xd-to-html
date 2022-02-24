const mainMenu = document.getElementById('main-menu');
const navBar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const pageCountNumbers = document.querySelectorAll('.page-count a div');
console.log(pageCountNumbers);

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

	let current = '';
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.scrollY >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute('id');
		}
	});

	pageCountNumbers.forEach((pageCount) => {
		pageCount.classList.remove('page-count-active');

		if (pageCount.classList.contains(current)) {
			pageCount.classList.add('page-count-active');
		}
	});
});
