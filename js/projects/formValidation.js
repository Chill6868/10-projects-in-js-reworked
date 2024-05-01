const handleFormValidation = () => {
	const inputAll = document.querySelectorAll("input");
	const inputUsername = document.querySelector("input#username");
	const inputPassword = document.querySelector("input#password");
	const inputPasswordRepeat = document.querySelector("input#password-repeat");
	const inputMail = document.querySelector("input#mail");

	const mailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	let errorCount;

	const btnClear = document.querySelector(".btn-clear");
	const btnSend = document.querySelector(".btn-send");

	const modalFormSendedSuccessful = document.querySelector(
		".modal-form-sended-successful"
	);

	const checkInputs = () => {
		errorCount = 0;

		if (inputUsername.value.length < 3) {
			inputError(inputUsername);
			errorCount++;
		}

		if (inputPassword.value.length < 6) {
			inputError(inputPassword);
			errorCount++;
		}

		if (
			inputPasswordRepeat.value != inputPassword.value ||
			inputPasswordRepeat.value == ""
		) {
			inputError(inputPasswordRepeat);
			errorCount++;
		}

		if (!mailRegExp.test(inputMail.value)) {
			inputError(inputMail);
			errorCount++;
		}

		if (errorCount == 0) {
			modalShow(modalFormSendedSuccessful);
			inputAllClear();
		}
	};

	const inputAllClear = () => {
		inputAll.forEach((input) => {
			inputClear(input);
			input.value = "";
		});
	};

	btnSend.addEventListener("click", () => {
		checkInputs();
	});

	btnClear.addEventListener("click", () => {
		inputAllClear();
	});

	inputAll.forEach((input) => {
		input.addEventListener("keypress", (e) => {
			if (e.key === "Enter") {
				checkInputs();
			}
		});

		// input.addEventListener("input", () => {
		// 	if (input.value == "") {
		// 		inputClear(input);
		// 	}
		// });
	});

	inputUsername.addEventListener("input", () => {
		if (inputUsername.value.length >= 3) {
			inputSuccess(inputUsername);
		} else if (inputUsername.value.length < 3) {
			inputError(inputUsername);
		}
	});

	const checkPasswordInputs = () => {
		// if (inputPassword.value == "" || inputPasswordRepeat.value == "") {
		// 	inputClear(inputPassword);
		// 	inputClear(inputPasswordRepeat);
		// }

		if (inputPassword.value.length >= 6) {
			inputSuccess(inputPassword);
		} else if (inputPassword.value.length < 6) {
			inputError(inputPassword);
		}

		if (
			inputPasswordRepeat.value == inputPassword.value &&
			inputPasswordRepeat.value != "" &&
			inputPasswordRepeat.value.length >= 6
		) {
			inputSuccess(inputPasswordRepeat);
		} else {
			inputError(inputPasswordRepeat);
		}
	};

	inputPassword.addEventListener("input", () => {
		checkPasswordInputs();
		if (inputPassword.value == "") {
			inputClear(inputPassword);
			inputClear(inputPasswordRepeat);
		}
	});

	inputPasswordRepeat.addEventListener("input", () => {
		checkPasswordInputs();
		if (inputPasswordRepeat.value == "") {
			inputClear(inputPassword);
			inputClear(inputPasswordRepeat);
		}
	});

	inputMail.addEventListener("input", () => {
		if (mailRegExp.test(inputMail.value)) {
			inputSuccess(inputMail);
		}
	});

	inputAll.forEach((input) => {
		input.addEventListener("input", () => {
			if (input.value == "") {
				inputClear(input);
			}
		});
	});
};
