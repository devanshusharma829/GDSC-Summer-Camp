let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		logoSpan.forEach((span, idx) => {
			setTimeout(() => {
				span.classList.add("active");
			}, (idx + 1) * 400);
		});

		setTimeout(() => {
			logoSpan.forEach((span, idx) => {
				setTimeout(() => {
					span.classList.remove("active");
					span.classList.add("fade");
				}, (idx + 1) * 50);
			});
		}, 2000);

		setTimeout(() => {
			intro.style.top = "-100vh";
		}, 2300);
	});
});

//flow in from left
const observer1 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// do something
			entry.target.classList.add("show-l");
		} else {
			// do something
			entry.target.classList.remove("show-l");
		}
	});
});

const hiddenElements1 = document.querySelectorAll(".hidden-l");
hiddenElements1.forEach((element) => observer1.observe(element));

//flow in from right
const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// do something
			entry.target.classList.add("show-r");
		} else {
			// do something
			entry.target.classList.remove("show-r");
		}
	});
});

const hiddenElements2 = document.querySelectorAll(".hidden-r");
hiddenElements2.forEach((element) => observer2.observe(element));

//pop in
const observer3 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// do something
			entry.target.classList.add("show-pop");
		} else {
			// do something
			entry.target.classList.remove("show-pop");
		}
	});
});

const hiddenElements3 = document.querySelectorAll(".hidden-pop");
hiddenElements3.forEach((element) => observer3.observe(element));
