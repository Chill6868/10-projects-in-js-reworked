const modalShadow = document.querySelector(".modal__shadow");

const modalAll = document.querySelectorAll(".modal__box");
const modalBtnClose = document.querySelectorAll(".modal__btn-close");

const modalShow = (modal) => {
	modalShadow.classList.add("modal__shadow--visible");
	modalShadow.classList.add("modal__shadow--z-index-visible");

	modal.classList.add("modal__box--visible");
	modal.classList.add("modal__box--z-index-visible");
};

const modalHide = () => {
	modalShadow.classList.remove("modal__shadow--visible");
	setTimeout(() => {
		modalShadow.classList.remove("modal__shadow--z-index-visible");
	}, 300);

	modalAll.forEach((modal) => {
		modal.classList.remove("modal__box--visible");
		setTimeout(() => {
			modal.classList.remove("modal__box--z-index-visible");
		}, 300);
	});
};

modalBtnClose.forEach((btn) => {
	btn.addEventListener("click", () => {
		modalHide();
	});
});

modalShadow.addEventListener("click", () => {
	modalHide();
});
