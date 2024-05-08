const handleButtonClickAnimation = () => {
	const btnAll = document.querySelectorAll("button, .btn-animation");

	btnAll.forEach((btn) => {
		let appendedAnimationElementGlobal;

		const hideAnimation = () => {
			appendedAnimationElementGlobal.classList.add(
				"btn__click-animation--hide"
			);
			const appendedAnimationElement = appendedAnimationElementGlobal;
			setTimeout(() => {
				appendedAnimationElement.remove();
			}, 300);
		};

		btn.addEventListener("mousedown", (e) => {
			const animationElement = document.createElement("div");
			appendedAnimationElementGlobal = animationElement;
			animationElement.classList.add("btn__click-animation");
			const offsetX = e.offsetX;
			const offsetY = e.offsetY;
			animationElement.style.top = `${offsetY}px`;
			animationElement.style.left = `${offsetX}px`;

			btn.append(animationElement);

			const appendedAnimationElement = btn.querySelector(
				".btn__click-animation"
			);
			const appendedAnimationElementParent = appendedAnimationElement.closest(
				"button, .btn-animation"
			);

			const appendedAnimationElementWidth =
				appendedAnimationElementParent.offsetWidth;

			animationElement.style.setProperty(
				"--animation-size",
				`${appendedAnimationElementWidth * 2.75}px`
			);

			btn.addEventListener("mouseleave", () => hideAnimation());
		});

		btn.addEventListener("mouseup", () => hideAnimation());
	});
};
