const handleStopwatch = () => {
	const btnPlay = document.querySelector(".stopwatch__btn-play");
	const btnPause = document.querySelector(".stopwatch__btn-pause");
	const btnStop = document.querySelector(".stopwatch__btn-stop");
	const btnClear = document.querySelector(".stopwatch__btn-clear");
	const btnArchive = document.querySelector(".stopwatch__btn-archive");

	const btnShowHelp = document.querySelector(".stopwatch__modal-help-btn");
	const btnShowThemeSelection = document.querySelector(
		".stopwatch__modal-theme-btn"
	);

	const modalStopwatchHelp = document.querySelector(".modal-stopwatch-help");
	const root = document.documentElement;

	const themeSelectionBox = document.querySelector(
		".stopwatch__theme-selection-box"
	);
	const btnThemeRed = document.querySelector(
		".stopwatch__theme-selection-btn--red"
	);
	const btnThemeBlue = document.querySelector(
		".stopwatch__theme-selection-btn--blue"
	);
	const btnThemeGreen = document.querySelector(
		".stopwatch__theme-selection-btn--green"
	);

	const stopwatchTime = document.querySelector(".stopwatch__time");
	const stopwatchLastTime = document.querySelector(".stopwatch__last-time");
	const archive = document.querySelector(".stopwatch__archive");

	let stopwatchTimeCount;
	let minutes = 0;
	let seconds = 0;

	let IsTimerCounting = false;

	let stopwatchTimeStopNumber = 1;

	const timerCount = () => {
		stopwatchTimeCount = setInterval(() => {
			timerInsert(seconds);
			seconds++;
		}, 100);

		IsTimerCounting = true;
	};

	const timerInsert = (sec) => {
		if (sec < 10) {
			stopwatchTime.textContent = `${minutes}:0${sec}`;
		} else if (sec >= 10 && sec < 60) {
			stopwatchTime.textContent = `${minutes}:${sec}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatchTime.textContent = `${minutes}:00`;
		}
	};

	btnPlay.addEventListener("click", () => {
		if (!IsTimerCounting) {
			timerCount();
		}
	});

	btnPause.addEventListener("click", () => {
		clearInterval(stopwatchTimeCount);
		IsTimerCounting = false;
	});

	btnStop.addEventListener("click", () => {
		if (stopwatchTime.textContent != `0:00`) {
			clearInterval(stopwatchTimeCount);
			IsTimerCounting = false;
			minutes = 0;
			seconds = 0;

			const stopwatchCurrentTime = stopwatchTime.textContent;
			archive.innerHTML += `
                <div class="stopwatch__archive-item">
                  <div class="stopwatch__archive-item-text">Pomiar nr ${stopwatchTimeStopNumber}</div>
                  <div class="stopwatch__archive-item-time">${stopwatchCurrentTime}</div>
                </div>
            `;

			stopwatchLastTime.textContent = `Ostatni czas: ${stopwatchCurrentTime}`;
			stopwatchLastTime.classList.add("stopwatch__last-time--visible");

			stopwatchTimeStopNumber++;
			stopwatchTime.textContent = `0:00`;
		}
	});

	btnClear.addEventListener("click", () => {
		clearInterval(stopwatchTimeCount);
		IsTimerCounting = false;
		minutes = 0;
		seconds = 0;
		stopwatchTime.textContent = `0:00`;

		archive.innerHTML = "";
		stopwatchTimeStopNumber = 1;

		archive.classList.remove("stopwatch__archive--visible");
		stopwatchLastTime.classList.remove("stopwatch__last-time--visible");
	});

	btnArchive.addEventListener("click", () => {
		archive.classList.toggle("stopwatch__archive--visible");
	});

	btnShowHelp.addEventListener("click", () => {
		modalShow(modalStopwatchHelp);
	});

	btnShowThemeSelection.addEventListener("click", () => {
		themeSelectionBox.classList.toggle(
			"stopwatch__theme-selection-box--visible"
		);
	});

	btnThemeRed.addEventListener("click", () => {
		root.style.setProperty("--stopwatch-color", "orangered");
	});

	btnThemeBlue.addEventListener("click", () => {
		root.style.setProperty("--stopwatch-color", "royalblue");
	});

	btnThemeGreen.addEventListener("click", () => {
		root.style.setProperty("--stopwatch-color", "lime");
	});
};
