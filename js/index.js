var nav = document.querySelector("nav");
const body = document.body;
let lastScroll = 0;

// window.addEventListener("scroll", function() {
//     nav.classList.toggle("sticky", window.scrollY > 550);
// })

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
    nav.classList.toggle("sticky", window.scrollY > 600);
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});