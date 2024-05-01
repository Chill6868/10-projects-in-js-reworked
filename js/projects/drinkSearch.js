const handleDrinkSearch = () => {
	const input = document.querySelector("#sought-item");
	const liItems = document.querySelectorAll(".drink-search__item");
	const TextNotFound = document.querySelector(".drink-search__item-not-found");
	let searchPhrase;
	let phraseFound;

	const searchItem = (phrase) => {
		phraseFound = false;

		liItems.forEach((item) => {
			if (phrase.test(item.textContent)) {
				item.classList.remove("drink-search__item--hidden");
				phraseFound = true;
			} else {
				item.classList.add("drink-search__item--hidden");
			}
		});

		if (!phraseFound) {
			TextNotFound.classList.add("drink-search__item-not-found--visible");
		} else {
			TextNotFound.classList.remove("drink-search__item-not-found--visible");
		}
	};

	input.addEventListener("input", () => {
		searchPhrase = new RegExp(input.value, "i");
		searchItem(searchPhrase);
	});
};
