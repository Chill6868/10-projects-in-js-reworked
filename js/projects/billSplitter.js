const handleBillSplitter = () => {
	const inputAll = document.querySelectorAll("input");
	const inputAmount = document.querySelector("#amount-to-pay");
	const inputPeople = document.querySelector("#number-of-people");
	const inputTip = document.querySelector("#tip");
	const btnCount = document.querySelector(".btn-count");
	const outputText = document.querySelector(".billsplitter__output-text");
	const outputResult = document.querySelector(".billsplitter__output-result");

	const checkInputValues = () => {
		let errorCount = 0;
		let result;

		inputAll.forEach((input) => {
			if (input.value == "") {
				errorCount++;
				inputError(input);
			}
		});

		if (errorCount > 0) {
			result = false;
		} else {
			result = true;
		}

		return result;
	};

	const calculate = () => {
		const checkResult = checkInputValues();
		if (checkResult) {
			let result;
			if (inputTip.value != "none") {
				result = (
					(inputAmount.value * inputTip.value) /
					inputPeople.value
				).toFixed(2);
			} else {
				result = (inputAmount.value / inputPeople.value).toFixed(2);
			}
			outputText.innerHTML = `Powinniście się złożyć po <span class="billsplitter__output-result">${result}</span> zł!`;
		}
	};

	inputAll.forEach((input) => {
		input.addEventListener("input", (e) => {
			if (input.value == "") {
				inputClear(input);
			} else if (input.value != "") {
				inputSuccess(input);
			}

			if (e.keyCode === 13) {
				calculate();
			}
		});
	});

	inputAll.forEach((input) => {
		input.addEventListener("keypress", (e) => {
			if (e.keyCode === 13) {
				calculate();
			}
		});
	});

	btnCount.addEventListener("click", () => {
		calculate();
	});
};
