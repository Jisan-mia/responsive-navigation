// let toggle = document.querySelector(".brand-title");
let toggler = document.querySelector(".toggle");
let nav = document.querySelector(".nav-links");

console.log(toggler);
toggler.addEventListener("click", function () {
	nav.classList.toggle("active");
});
