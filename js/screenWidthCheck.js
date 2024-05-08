const widthAlert = document.querySelector(".width-alert");

window.addEventListener("load", () => {
	if (window.innerWidth < 1920) {
		widthAlert.classList.add("width-alert--visible");
	} else {
		widthAlert.classList.remove("width-alert--visible");
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth < 1920) {
		widthAlert.classList.add("width-alert--visible");
	} else {
		widthAlert.classList.remove("width-alert--visible");
	}
});
