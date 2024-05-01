const handleMyNotes = () => {
	// Buttons
	const btnNoteAdd = document.querySelector(".note-add");
	const btnNoteDeleteAll = document.querySelector(".note-delete-all");

	const btnNoteSave = document.querySelector(".note-save");
	const btnNoteSaveCancel = document.querySelector(".note-save-cancel");

	// Inputs
	const inputAll = document.querySelectorAll("input");
	const inputNoteTitle = document.querySelector("#note-title");
	const inputNoteText = document.querySelector("#note-text");

	//  Notes
	const noteContainer = document.querySelector(".mynotes__notes-container");

	//  Modal
	const modalAddNote = document.querySelector(".modal-add-note");

	// Functions
	const checkInputs = () => {
		let errorCount = 0;

		if (inputNoteTitle.value == "") {
			inputError(inputNoteTitle);
			errorCount++;
		}

		if (inputNoteText.value == "") {
			inputError(inputNoteText);
			errorCount++;
		}

		if (errorCount == 0) {
			pushNote();
		}
	};

	const pushNote = () => {
		const noteCreated = document.createElement("div");
		noteCreated.classList.add("mynotes__note");

		noteCreated.innerHTML += `
        <div class="mynotes__note-header">
            <div class="mynotes__note-title">${inputNoteTitle.value}</div>
            <button class="btn mynotes__note-btn-delete"><i class="ti ti-x"></i></button>
        </div>
        <div class="mynotes__note-container">
            <p class="mynotes__note-text-content">${inputNoteText.value}</p>
        </div>
    `;

		noteContainer.append(noteCreated);

		const noteCreatedDeleteBtn = noteCreated.querySelector(
			".mynotes__note-btn-delete"
		);
		noteCreatedDeleteBtn.addEventListener("click", (e) => {
			const note = e.target.closest(".mynotes__note");

			note.remove();
		});

		modalHide();
		modalReset();
	};

	const modalReset = () => {
		inputAll.forEach((input) => {
			input.value = "";
			inputClear(input);
		});
	};

	// Listeners
	btnNoteAdd.addEventListener("click", () => {
		modalShow(modalAddNote);
	});

	inputAll.forEach((input) => {
		input.addEventListener("input", () => {
			if (input.value == "") {
				inputClear(input);
			} else {
				inputSuccess(input);
			}
		});
	});

	btnNoteDeleteAll.addEventListener("click", () => {
		const noteAll = document.querySelectorAll(".mynotes__note");

		noteAll.forEach((note) => {
			note.remove();
		});
	});

	btnNoteSave.addEventListener("click", () => {
		checkInputs();
	});

	btnNoteSaveCancel.addEventListener("click", () => {
		modalReset();
	});
};
