const handleMagic8Ball = () => {
	const img8ball = document.querySelector(".magic8ball__img");
	const inputQuestion = document.querySelector("#question");
	const textOutput = document.querySelector(".magic8ball__output-text");
	const answerAll = [
		"Tak!",
		"Nie.",
		"Nie wiem.",
		"Możliwe...",
		"Być może...",
		"Z pewnością!",
	];

	const checkQuestion = () => {
		img8ball.classList.add("magic8ball__img--animation");
		setTimeout(() => {
			if (inputQuestion.value == "" || inputQuestion.value == "?") {
				textOutput.textContent = "Musisz zadać jakieś pytanie!";
			} else if (inputQuestion.value.slice(-1) != "?") {
				textOutput.textContent = `Pytanie musi być zakończone znakiem "?".`;
			} else {
				const answerRandom =
					answerAll[Math.floor(Math.random() * answerAll.length)];
				textOutput.textContent = answerRandom;
			}
			textOutput.classList.add("magic8ball__output-text--visible");
			img8ball.classList.remove("magic8ball__img--animation");
		}, 600);
	};

	img8ball.addEventListener("click", () => {
		checkQuestion();
	});

	inputQuestion.addEventListener("keydown", (e) => {
		if (e.keyCode === 13) {
			checkQuestion();
		}
	});
};
