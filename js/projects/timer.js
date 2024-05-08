const handleTimer = () => {
	const btnSettings = document.querySelector(".timer__settings-btn");
	const modalSettings = document.querySelector(".modal-timer-settings");

	const inputAll = document.querySelectorAll("input");
	const inputEventName = document.querySelector("#event-name");
	const inputEventDay = document.querySelector("#timer-day");
	const inputEventMonth = document.querySelector("#timer-month");
	const inputEventYear = document.querySelector("#timer-year");
	const inputImgLink = document.querySelector("#img-link");

	const boxHeader = document.querySelector(".timer__header");

	const boxEventName = document.querySelector(".timer__event-name");

	const boxDaysNumber = document.querySelector(".timer__days");
	const boxHoursNumber = document.querySelector(".timer__hours");
	const boxMinutesNumber = document.querySelector(".timer__minutes");
	const boxSecondsNumber = document.querySelector(".timer__seconds");

	const btnSaveSettings = document.querySelector(".btn-save-settings");
	const btnSaveSettingsCancel = document.querySelector(
		".btn-save-settings-cancel"
	);

	let timerDefault;

	const setCurrentYearMinAttrib = () => {
		const currentYear = new Date().getFullYear();
		if (inputEventYear) {
			inputEventYear.setAttribute("min", currentYear);
		}
	};

	const setDefaultTimer = () => {
		const nextYear = new Date().getFullYear() + 1;

		const dateEnd = new Date(nextYear, 0, 1);

		timerDefault = setInterval(() => {
			const dateNow = new Date();
			const dateDifference = dateEnd - dateNow;

			if (dateDifference < 0) {
				clearInterval(timer);
				boxDaysNumber.textContent = "0";
				boxHoursNumber.textContent = "0";
				boxMinutesNumber.textContent = "0";
				boxSecondsNumber.textContent = "0";
				return;
			}

			const totalSeconds = Math.floor(dateDifference / 1000);
			const seconds = totalSeconds % 60;
			const totalMinutes = Math.floor(totalSeconds / 60);
			const minutes = totalMinutes % 60;
			const totalHours = Math.floor(totalMinutes / 60);
			const hours = totalHours % 24;
			const days = Math.floor(totalHours / 24);

			boxDaysNumber.textContent = days;
			boxHoursNumber.textContent = hours;
			boxMinutesNumber.textContent = minutes;
			boxSecondsNumber.textContent = seconds;
		}, 1000);
	};

	const applyChanges = () => {
		applyEventName();
		applyDate();
		applyImgLink();

		modalHide();
		clearInputs();
		// setTimeout(clearInputs, 1000);
	};

	const applyEventName = () => {
		if (inputEventName.value != "") {
			boxEventName.textContent = inputEventName.value;
		}
	};

	const applyDate = () => {
		if (
			inputEventDay.value != "" &&
			inputEventMonth.value != "" &&
			inputEventYear.value != ""
		) {
			clearInterval(timerDefault);

			const dateEnd = new Date(
				inputEventYear.value,
				inputEventMonth.value - 1,
				inputEventDay.value
			);

			const timer = setInterval(() => {
				const dateNow = new Date();
				const dateDifference = dateEnd - dateNow;

				if (dateDifference < 0) {
					clearInterval(timer);
					boxDaysNumber.textContent = "0";
					boxHoursNumber.textContent = "0";
					boxMinutesNumber.textContent = "0";
					boxSecondsNumber.textContent = "0";
					return;
				}

				const totalSeconds = Math.floor(dateDifference / 1000);
				const seconds = totalSeconds % 60;
				const totalMinutes = Math.floor(totalSeconds / 60);
				const minutes = totalMinutes % 60;
				const totalHours = Math.floor(totalMinutes / 60);
				const hours = totalHours % 24;
				const days = Math.floor(totalHours / 24);

				boxDaysNumber.textContent = days;
				boxHoursNumber.textContent = hours;
				boxMinutesNumber.textContent = minutes;
				boxSecondsNumber.textContent = seconds;
			}, 1000);
		}
	};

	const applyImgLink = () => {
		if (inputImgLink.value != "") {
			boxHeader.style.backgroundImage = `url("${inputImgLink.value}")`;
		}
	};

	const clearInputs = () => {
		inputAll.forEach((input) => {
			input.value = "";
		});
	};

	btnSettings.addEventListener("click", () => {
		modalShow(modalSettings);
	});

	inputAll.forEach((input) => {
		input.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				applyChanges();
			}
		});
	});

	btnSaveSettings.addEventListener("click", () => {
		applyChanges();
	});

	btnSaveSettingsCancel.addEventListener("click", () => {
		clearInputs();
	});

	setCurrentYearMinAttrib();
	setDefaultTimer();
};
