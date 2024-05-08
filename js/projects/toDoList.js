const handleToDoList = () => {
	const inputAddTask = document.querySelector("#todo-task");
	const inputEditTask = document.querySelector("#todo-task-edit");

	const btnAddTask = document.querySelector(".todo__btn-add-task");
	const btnSaveEditTask = document.querySelector(".btn-save-edit-task");
	const btnSaveEditTaskCancel = document.querySelector(
		".btn-save-edit-task-cancel"
	);

	const notificationBox = document.querySelector(
		".todo__notification-container"
	);

	const taskContainer = document.querySelector(".todo__main-box");
	const taskNoTasksText = document.querySelector(".todo__no-tasks-text");

	const modalEditTask = document.querySelector(".modal-edit-task");
	let editedTask;

	const addTask = () => {
		if (inputAddTask.value == "") {
			pushNotification("Wpisz treść zadania.");
		} else {
			const createdTask = document.createElement("div");
			createdTask.classList.add("todo__task-box");

			const createdTaskName = document.createElement("span");
			createdTaskName.classList.add("todo__task-name");
			createdTaskName.textContent = inputAddTask.value;

			const createdTaskBtnBox = document.createElement("div");
			createdTaskBtnBox.classList.add("todo__task-btn-box");

			const createdTaskBtnComplete = document.createElement("button");
			createdTaskBtnComplete.classList.add(
				"btn",
				"todo__task-btn",
				"todo__task-complete"
			);
			createdTaskBtnComplete.innerHTML = `<i class="ti ti-check"></i>`;
			createdTaskBtnComplete.addEventListener("click", () => {
				createdTaskBtnComplete.classList.toggle(
					"todo__task-complete--completed"
				);
				const task = createdTaskBtnComplete.closest(".todo__task-box");
				const taskName = task.querySelector(".todo__task-name");
				taskName.classList.toggle("todo__task-complete--completed");
			});

			const createdTaskBtnEdit = document.createElement("button");
			createdTaskBtnEdit.classList.add(
				"btn",
				"todo__task-btn",
				"todo__task-edit"
			);
			createdTaskBtnEdit.innerHTML = `<i class="ti ti-edit"></i>`;
			createdTaskBtnEdit.addEventListener("click", () => {
				editedTask = createdTaskBtnComplete.closest(".todo__task-box");
				modalShow(modalEditTask);
			});

			const createdTaskBtnDelete = document.createElement("button");
			createdTaskBtnDelete.classList.add(
				"btn",
				"todo__task-btn",
				"todo__task-delete"
			);
			createdTaskBtnDelete.innerHTML = `<i class="ti ti-x"></i>`;
			createdTaskBtnDelete.addEventListener("click", () => {
				const task = createdTaskBtnDelete.closest(".todo__task-box");
				task.remove();
				checkTaskNumber();
			});

			createdTaskBtnBox.append(
				createdTaskBtnComplete,
				createdTaskBtnEdit,
				createdTaskBtnDelete
			);

			createdTask.append(createdTaskName, createdTaskBtnBox);

			inputAddTask.value = "";
			taskContainer.append(createdTask);
			checkTaskNumber();
		}
	};

	const checkTaskNumber = () => {
		const taskAll = document.querySelectorAll(".todo__task-box");

		if (taskAll.length == 0) {
			taskNoTasksText.classList.add("todo__no-tasks-text--visible");
		} else {
			taskNoTasksText.classList.remove("todo__no-tasks-text--visible");
		}
	};

	const editTask = (task) => {
		if (inputEditTask.value == "") {
			pushNotification("Wpisz treść zadania.");
		} else {
			const taskName = task.querySelector(".todo__task-name");
			taskName.textContent = inputEditTask.value;

			inputEditTask.value = "";
			modalHide();
		}
	};

	const pushNotification = (notificationContent) => {
		const notification = document.createElement("div");
		notification.classList.add("todo__error-notification");

		notification.innerHTML = `<i class="ti ti-circle-x"></i> ${notificationContent}`;

		const notificationSound = new Audio("./audio/notify-pop.mp3");
		notificationSound.play();

		notificationBox.append(notification);

		// const notificationRect = notification.getBoundingClientRect();
		// const notificationHeight = notificationRect.height;

		setTimeout(() => {
			notification.classList.add("todo__error-notification--hide");
		}, 3000);

		setTimeout(() => {
			notification.remove();
		}, 3600);
	};

	btnAddTask.addEventListener("click", () => {
		addTask();
	});

	btnSaveEditTask.addEventListener("click", () => {
		editTask(editedTask);
	});

	btnSaveEditTaskCancel.addEventListener("click", () => {
		inputEditTask.value = "";
	});

	inputAddTask.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			addTask();
		}

		setTimeout(() => {
			if (inputAddTask.value.length == 30) {
				pushNotification("Treść zadanie nie może być dłuższa niż 30 znaków.");
			}
		}, 10);
	});

	inputEditTask.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			editTask(editedTask);
		}

		setTimeout(() => {
			if (inputEditTask.value.length == 30) {
				pushNotification("Treść zadanie nie może być dłuższa niż 30 znaków.");
			}
		}, 10);
	});
};
