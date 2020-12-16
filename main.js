window.addEventListener("resize", () => {
	addRequiredClass();
});

function addRequiredClass() {
	if (window.innerWidth < 860) {
		document.body.classList.add("mobile");
	} else {
		document.body.classList.remove("mobile");
	}
}

window.onload = addRequiredClass;

let humburger = document.querySelector(".humburger");
let mobileNav = document.querySelector(".nav-list");

let line = document.querySelectorAll(".humburger .line");
console.log(line);
let isActive = false;

humburger.addEventListener("click", () => {
	mobileNav.classList.toggle("open");

	if (!isActive) {
		line[0].style.transform = "rotate(45deg)";
		line[1].style.opacity = "0";
		line[2].style.transform = "rotate(-45deg)";
		isActive = true;
	} else {
		line[0].style.transform = "rotate(0deg)";
		line[1].style.opacity = "1";
		line[2].style.transform = "rotate(0deg)";
		isActive = false;
	}
});
