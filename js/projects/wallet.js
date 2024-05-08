const handleWallet = () => {
	const btnItemAdd = document.querySelector(".btn-add-transaction");
	const modalAddTransaction = document.querySelector(".modal-add-transaction");

	const inputAll = document.querySelectorAll("input");
	const inputName = document.querySelector("#transaction-name");
	const inputValue = document.querySelector("#transaction-value");
	const inputCategory = document.querySelector("#transaction-category");

	const boxIncome = document.querySelector(".wallet__income-box");
	const boxSpend = document.querySelector(".wallet__spend-box");

	const btnSaveTransaction = document.querySelector(".btn-save-transaction");
	const btnSaveTransactionCancel = document.querySelector(
		".btn-save-transaction-cancel"
	);

	const btnDeleteAll = document.querySelector(".btn-delete-all");

	let funds = 0;
	const fundsAvailable = document.querySelector(
		".wallet__available-funds-value"
	);

	const btnThemeLight = document.querySelector(".theme-light");
	const btnThemeDark = document.querySelector(".theme-dark");

	const root = document.documentElement;

	const checkInputs = () => {
		let errorCount = 0;

		if (inputName.value.length == 0) {
			inputError(inputName);
			errorCount++;
		}

		if (inputValue.value == 0) {
			inputError(inputValue);
			errorCount++;
		}

		if (inputCategory.value == "none") {
			inputError(inputCategory);
			errorCount++;
		}

		if (errorCount == 0) {
			const createdItem = document.createElement("div");
			createdItem.classList.add("wallet__item");

			let createdItemCategory;
			switch (inputCategory.value) {
				case "income":
					createdItemCategory = `<i class="ti ti-cash-banknote"></i>`;
					break;
				case "groceries":
					createdItemCategory = `<i class="ti ti-shopping-cart"></i>`;
					break;
				case "cinema":
					createdItemCategory = `<i class="ti ti-movie"></i>`;
					break;
				case "food":
					createdItemCategory = `<i class="ti ti-tools-kitchen-2"></i>`;
					break;
				default:
					createdItemCategory = `<i class="ti ti-coin"></i>`;
					break;
			}

			let createdItemValueType;
			let createdItemBox;
			if (inputValue.value > 0) {
				createdItemValueType = "income";
				createdItemBox = document.querySelector(".wallet__income-box");
			} else {
				createdItemValueType = "spend";
				createdItemBox = document.querySelector(".wallet__spend-box");
			}

			const createdItemCloseBtn = document.createElement("button");
			createdItemCloseBtn.classList.add("btn");
			createdItemCloseBtn.classList.add("wallet__item-close-btn");
			createdItemCloseBtn.innerHTML = '<i class="ti ti-x"></i>';
			createdItemCloseBtn.addEventListener("click", (e) => {
				const item = e.target.closest(".wallet__item");
				item.remove();

				const itemValue = item.querySelector(".wallet__item-value");
				calcFunds(parseFloat(-itemValue.textContent));
			});

			createdItem.innerHTML = `
		<div>
		<span class="wallet__item-category">${createdItemCategory}</span>
		<span class="wallet__item-name">${inputName.value}</span>
		</div>
		<div class="part2">
		<span class="wallet__item-value--${createdItemValueType}"><span class="wallet__item-value">${inputValue.value}</span>zł</span>
		</div>
		`;

			const btnBox = createdItem.querySelector(".part2");
			btnBox.append(createdItemCloseBtn);

			createdItemBox.append(createdItem);

			calcFunds(parseFloat(inputValue.value));
			modalHide();
			inputAllClear();
		}
	};

	const inputAllClear = () => {
		const inputAll = document.querySelectorAll("input");
		const selectAll = document.querySelectorAll("select");

		inputAll.forEach((input) => {
			inputClear(input);
			input.value = "";
		});

		selectAll.forEach((select) => {
			inputClear(select);
			select.value = "none";
		});
	};

	const calcFunds = (value) => {
		// console.log(value);
		funds += value;

		fundsAvailable.textContent = funds;
	};

	inputAll.forEach((input) => {
		input.addEventListener("input", () => {
			if (input.value.length == 0) {
				inputClear(input);
			} else if (input.value.length > 0) {
				inputSuccess(input);
			}
		});
	});

	inputValue.addEventListener("input", () => {
		if (inputValue.value == 0) {
			inputError(inputValue);
		}
	});

	inputCategory.addEventListener("change", () => {
		inputSuccess(inputCategory);
	});

	btnItemAdd.addEventListener("click", () => {
		modalShow(modalAddTransaction);
	});

	btnSaveTransaction.addEventListener("click", () => {
		checkInputs();
	});

	btnSaveTransactionCancel.addEventListener("click", () => {
		inputAllClear();
	});

	btnDeleteAll.addEventListener("click", () => {
		const itemAll = document.querySelectorAll(".wallet__item");

		itemAll.forEach((item) => {
			item.remove();
		});
	});

	btnThemeLight.addEventListener("click", () => {
		root.style.setProperty("--color-bg", "#ffffff");
		root.style.setProperty("--color-text", "#121212");
	});

	btnThemeDark.addEventListener("click", () => {
		root.style.setProperty("--color-bg", "#121212");
		root.style.setProperty("--color-text", "#ffffff");
	});
};
