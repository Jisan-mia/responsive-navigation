const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-wrapper ul.nav-list");
const main = document.querySelector("main");

menu.addEventListener("click", () => {
	console.log("clicked");
	nav.classList.toggle("open");
	main.addEventListener("click", () => {
		nav.classList.remove("open");
	});
});
