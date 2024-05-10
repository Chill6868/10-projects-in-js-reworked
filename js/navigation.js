const nav = document.querySelector(".nav");
const navMini = document.querySelector(".nav-mini");

const btnNavMinify = document.querySelector(".btn-nav-minify");
const btnNavEnlarge = document.querySelector(".btn-nav-enlarge");

const mainContainer = document.querySelector(".main__container");
const mainSectionContainer = document.querySelector(".main__section-container");

btnNavMinify.addEventListener("click", () => {
	nav.classList.add("nav--hidden");
	setTimeout(() => {
		navMini.classList.remove("nav-mini--hidden");
	}, 300);
	mainContainer.classList.add("main__container--nav-minified");
});

btnNavEnlarge.addEventListener("click", () => {
	navMini.classList.add("nav-mini--hidden");
	setTimeout(() => {
		nav.classList.remove("nav--hidden");
		mainContainer.classList.remove("main__container--nav-minified");
	}, 300);
});

// ===========================================================================
// Navigation Buttons
// ===========================================================================

// =============
// Variables
// =============

const btnNavNormal = document.querySelectorAll(".nav .nav__btn-box button");
const btnNavMini = document.querySelectorAll(
	".nav-mini .nav-mini__btn-box button"
);

// =============
// Functions
// =============

const btnClickNormal = (e) => {
	const btnClass = e.target.classList[0];

	btnNavNormal.forEach((btn) => {
		btn.classList.remove("nav__btn--active");
	});

	btnNavMini.forEach((btn) => {
		btn.classList.remove("nav-mini__btn--active");
	});

	btnNavMini.forEach((btn) => {
		if (btn.classList.contains(btnClass)) {
			btn.classList.add("nav-mini__btn--active");
		}
	});

	e.target.classList.add("nav__btn--active");
};

const btnClickMini = (e) => {
	const btnClass = e.target.classList[0];

	btnNavNormal.forEach((btn) => {
		btn.classList.remove("nav__btn--active");
	});

	btnNavMini.forEach((btn) => {
		btn.classList.remove("nav-mini__btn--active");
	});

	btnNavNormal.forEach((btn) => {
		if (btn.classList.contains(btnClass)) {
			btn.classList.add("nav__btn--active");
		}
	});

	e.target.classList.add("nav-mini__btn--active");
};

const pushProject = (section) => {
	mainSectionContainer.innerHTML = ``;
	mainSectionContainer.innerHTML = section;
};

// =============
// Projects
// =============

const aboutProject = `
<section class="about-project">
<div class="wrapper">
	<div class="about-project__container">
		<div class="text-box">
			<h2 class="text__xl"><i class="ti ti-info-circle"></i> O Projekcie</h2>
			<h4 class="text__md">Kilka informacji:</h4>
			<ul class="about-project__ul">
				<li>Strona nie jest responsywna, ponieważ używanie jej na telefonach mija się z celem.
				</li>
				<li>Wszystkie projekty pochodzą z kursu <a
						href="https://www.udemy.com/course/10-projektow-w-czystym-javascript-cz-1/"
						target="_blank" class="a a__custom-1">10 projektów w czystym
						JavaScript</a>
					autorstwa <a href="https://www.youtube.com/@Majek_03" target="_blank"
						class="a a__custom-1">Majka</a>.</li>
				<li>Projekt powstał z myślą o:
					<ul class="about-project__ul-in-ul">
						<li>Utrwaleniu wiedzy o JS po ukończeniu kursu,</li>
						<li>Próbie napisania Single Web Application bez żadnego frameworka (inner.HTML,
							oczywiście 4fun).
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>
</section>
`;

const drinkSearch = `
<section class="drink-search">
<div class="wrapper">
	<div class="drink-search__container">
		<div class="drink-search__box">
			<div class="drink-search__header">
				<h2 class="text__xl drink-search__title">DrinkSearch</h2>
				<div class="drink-search__header--shadow"></div>
			</div>
			<div class="drink-search__main-box">
				<div class="input__box">
					<input type="text" id="sought-item">
					<label for="sought-item">Wpisz nazwę szukanego napoju:</label>
				</div>
				<ul class="drink-search__item-box">
					<h2 class="text__md drink-search__subtitle">Lista Dostępnych Napojów:</h2>
					<li class="drink-search__item">Mleko</li>
					<li class="drink-search__item">Piwo</li>
					<li class="drink-search__item">Whisky</li>
					<li class="drink-search__item">Pepsi</li>
					<li class="drink-search__item">Woda gazowana</li>
					<li class="drink-search__item">Sok jabłkowy</li>
					<li class="drink-search__item">Sok pomarańczowy</li>
					<li class="drink-search__item">Sok bananowy</li>
					<li class="drink-search__item">Sok wieloowocowy</li>
					<li class="drink-search__item">Wino czerwone</li>
					<li class="drink-search__item">Wino białe</li>
					<li class="drink-search__item">Woda niegazowana</li>
					<li class="drink-search__item">Energy drink</li>
					<p class="drink-search__item-not-found">Nie znaleziono napoju o podanej nazwie.</p>
				</ul>
			</div>
		</div>
	</div>
</div>
</section>
`;

const billSplitter = `
<section class="billsplitter">
<div class="wrapper">
	<div class="billsplitter__container">
		<div class="billsplitter__box">
			<div class="billsplitter__header">
				<h2 class="billsplitter__title">BillSplitter</h2>
				<p>Podziel się rachunkiem ze znajomymi!</p>
			</div>
			<div class="billsplitter__main-box">
				<div class="input__container">
					<div class="input__box">
						<input class="input-billsplitter" type="number" min="1" id="amount-to-pay">
						<label for="amount-to-pay">Kwota do zapłaty:</label>
						<p class="input__req"><span class="input__req-icon"><i
									class="ti ti-exclamation-circle"></i></span> Podaj kwotę do zapłaty.
						</p>
					</div>
					<div class="input__box">
						<input class="input-billsplitter" type="number" min="1" id="number-of-people">
						<label for="number-of-people">Ilość osób:</label>
						<p class="input__req"><span class="input__req-icon"><i
									class="ti ti-exclamation-circle"></i></span> Podaj ilość osób.</p>
					</div>
					<div class="input__box">
						<select id="tip">
							<option value="none" selected disabled>Wybierz napiwek</option>
							<option value="1.05">5%</option>
							<option value="1.1">10%</option>
							<option value="1.15">15%</option>
							<option value="1.2">20%</option>
						</select>
					</div>
					<button class="btn btn-count">
						<div class="btn__solid"></div>
						<span class="btn__text">Oblicz</span>
					</button>
				</div>
				<!-- <p class="billsplitter__output-text">Powinniście się złożyć po <span
						class="billsplitter__output-result">0</span> zł!</p> -->
				<p class="billsplitter__output-text">Kliknij przycisk <span
						class="text__color-main">Oblicz</span>, aby podzielić rachunek.</p>
			</div>
		</div>
	</div>
</div>
</section>
`;

const formValidation = `
<section class="form-validation">
<div class="wrapper">
	<div class="form-validation__container">
		<div class="form-validation__box">
			<div class="form-validation__header">
				<h2 class="form-validation__title">Zarejestruj się!</h2>
			</div>
			<div class="form-validation__main-box">
				<div class="input__container">
					<div class="input__box">
						<input class="input-form-validation" type="text" id="username">
						<label for="username">Nazwa użytkownika:</label>
						<p class="input__req"><span class="input__req-icon"><i
									class="ti ti-exclamation-circle"></i></span> Nazwa użytkownika musi
							składać się z min. 3 znaków.</p>
					</div>
					<div class="input__box">
						<input class="input-form-validation" type="text" id="password">
						<label for="password">Hasło</label>
						<p class="input__req"><span class="input__req-icon"><i
									class="ti ti-exclamation-circle"></i></span> Hasło musi składać się
							z
							min. 6 znaków.</p>
					</div>
					<div class="input__box">
						<input class="input-form-validation" type="text" id="password-repeat">
						<label for="password-repeat">Powtórz hasło:</label>
						<p class="input__req"><span class="input__req-icon"><i
									class="ti ti-exclamation-circle"></i></span> Hasła nie pasują do
							siebie.</p>
					</div>
					<div class="input__box">
						<input class="input-form-validation" type="text" id="mail">
						<label for="mail">E-Mail:</label>
						<p class="input__req"><span class="input__req-icon"><i
									class="ti ti-exclamation-circle"></i></span> Podaj poprawny adres
							e-mail.</p>
					</div>
					<div class="form-validation__btn-box">
						<button class="btn-clear form-validation__btn btn">
							<div class="btn__solid"></div>
							<div class="btn__text">Wyczyść</div>
						</button>
						<button class="btn-send form-validation__btn btn">
							<div class="btn__solid"></div>
							<div class="btn__text">Wyślij</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
`;

const magic8Ball = `
<section class="magic8ball">
<div class="wrapper">
	<div class="magic8ball__container">
		<div class="magic8ball__box">
			<div class="magic8ball__header">
				<h2 class="magic8ball__title">Magic 8Ball</h2>
				<p class="magic8ball__subtitle">Zadaj pytanie, kliknij bilę i poznaj prawdę!</p>
			</div>
			<img src="https://cdn.pixabay.com/photo/2012/04/16/11/05/ball-35516_1280.png" alt="8ball"
				class="magic8ball__img">
			<div class="input__box">
				<input type="text" id="question">
				<label for="question">Zadaj Pytanie:</label>
			</div>
			<p class="magic8ball__output-text">answer</p>
		</div>
	</div>
</div>
</section>
`;

const stopwatch = `
<section class="stopwatch">
<div class="wrapper">
	<div class="stopwatch__container">
		<div class="stopwatch__box">
			<div class="stopwatch__modal-btn-box">
				<button class="btn stopwatch__modal-btn stopwatch__modal-theme-btn"><i
						class="ti ti-brush"></i></button>
				<button class="btn stopwatch__modal-btn stopwatch__modal-help-btn"><i
						class="ti ti-question-mark"></i></button>
			</div>
			<div class="stopwatch__theme-selection-box">
				<button
					class="btn stopwatch__theme-selection-btn stopwatch__theme-selection-btn--red"></button>
				<button
					class="btn stopwatch__theme-selection-btn stopwatch__theme-selection-btn--blue"></button>
				<button
					class="btn stopwatch__theme-selection-btn stopwatch__theme-selection-btn--green"></button>
			</div>
			<h2 class="stopwatch__title text__xl">Stoper</h2>
			<div class="stopwatch__time-box">
				<p class="stopwatch__time">0:00</p>
				<p class="stopwatch__last-time">Ostatni czas: 0:12</p>
			</div>
			<div class="stopwatch__btn-box">
				<button class="btn stopwatch__btn stopwatch__btn-play"><i
						class="ti ti-player-play"></i></button>
				<button class="btn stopwatch__btn stopwatch__btn-pause"><i
						class="ti ti-player-pause"></i></button>
				<button class="btn stopwatch__btn stopwatch__btn-stop"><i
						class="ti ti-player-stop"></i></button>
				<button class="btn stopwatch__btn stopwatch__btn-clear"><i
						class="ti ti-square-x"></i></button>
				<button
					class="btn stopwatch__btn stopwatch__btn-archive stopwatch__btn-clear">Archiwum</button>
			</div>
			<div class="stopwatch__archive"></div>
		</div>
	</div>
</div>
</section>
`;

const myNotes = `
<section class="mynotes">
<div class="wrapper">
	<div class="mynotes__container">
		<div class="mynotes__top-bar">
			<div class="mynotes__logo"><i class="ti ti-note"></i> MyNotes</div>
			<div class="mynotes__top-bar-btn-box">
				<button class="btn mynotes__top-bar-btn note-add">
					<div class="btn__border"></div>
					<div class="btn__text"><i class="ti ti-plus"></i> Dodaj</div>
				</button>
				<button class="btn mynotes__top-bar-btn note-delete-all">
					<div class="btn__border"></div>
					<div class="btn__text"><i class="ti ti-trash"></i> Usuń wszystkie</div>
				</button>
			</div>
		</div>
		<div class="mynotes__notes-container"></div>
	</div>
</div>
</section>
`;

const exchangeRateApp = `
<section class="exchange">
<div class="wrapper">
	<div class="exchange__container">
		<div class="exchange__box">
			<div class="exchange__text-box">
				<h2 class="exchange__title">Exchange Rate App</h2>
				<p class="exchange__subtitle">Sprawdź aktualne kursy walut!</p>
			</div>
			<div class="exchange__input-box">
				<input class="exchange__input input-1" min="1" type="number" value="1">
				<select class="exchange__input exchange__select" id="currency-1">
					<option value="PLN">PLN</option>
					<option value="USD">USD</option>
					<option value="GBP">GBP</option>
					<option value="EUR">EUR</option>
					<option value="CHF">CHF</option>
				</select>
				<button class="btn exchange__btn-swap-rate">
					<div class="btn__border"></div>
					<div class="btn__text"><i class="ti ti-refresh"></i></div>
				</button>
				<input class="exchange__input input-2" min="1" type="number" disabled>
				<select class="exchange__input exchange__select" id="currency-2">
					<option value="PLN">PLN</option>
					<option value="USD" selected>USD</option>
					<option value="GBP">GBP</option>
					<option value="EUR">EUR</option>
					<option value="CHF">CHF</option>
				</select>
			</div>
			<p class="exchange__rate-text">1 EUR = 4.3599 PLN</p>
		</div>
	</div>
</div>
</section>
`;

const wallet = `
<section class="wallet">
<div class="wrapper">
	<div class="wallet__container">
		<div class="wallet__title-box">
			<h2 class="wallet__title"><i class="ti ti-wallet"></i> Wallet</h2>
			<p class="wallet__subtitle">Twój osobisty menedżer finansów.</p>
		</div>
		<div class="wallet__main-box">
			<p class="wallet__text">LISTA TRANSAKCJI</p>
			<div class="wallet__income-box wallet__box">
				<h3 class="wallet__box-title">Przychód:</h3>
			</div>
			<div class="wallet__spend-box wallet__box">
				<h3 class="wallet__box-title">Wydatki:</h3>
			</div>
			<div class="wallet__available-funds-box wallet__box">
				<h3 class="wallet__box-title">Dostępne środki:</h3>
				<p class="wallet__available-funds"><span
						class="wallet__available-funds-value">0</span>zł</p>
				<div class="wallet__available-funds-btn-box">
					<button class="btn wallet__available-funds-btn btn-add-transaction">
						<div class="btn__border"></div>
						<span class="btn__text"><i class="ti ti-plus"></i> Dodaj transakcję</span>
					</button>
					<button class="btn wallet__available-funds-btn btn-delete-all">
						<div class="btn__border"></div>
						<span class="btn__text"><i class="ti ti-trash"></i> Usuń wszystko</span>
					</button>
				</div>
				<h3 class="wallet__box-title">Wybierz motyw:</h3>
				<div class="wallet__theme-box">
					<button class="btn wallet__theme-btn theme-light"></button>
					<button class="btn wallet__theme-btn theme-dark"></button>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
`;

const timer = `
<section class="timer">
<div class="wrapper">
	<div class="timer__container">
		<div class="timer__box">
			<div class="timer__header">
				<button class="btn timer__settings-btn">
					<div class="btn__border"></div>
					<span class="btn__text"><i class="ti ti-settings"></i></span>
				</button>
			</div>
			<div class="timer__main-box">
				<p class="timer__title"><span class="timer__event-name">nowy rok</span> za:</p>
				<div class="timer__time-container">
					<div class="timer__time-box">
						<span class="timer__time-box-number timer__days">0</span>
						<span class="timer__time-box-description">Dni</span>
					</div>
					<div class="timer__time-box">
						<span class="timer__time-box-number timer__hours">0</span>
						<span class="timer__time-box-description">Godzin</span>
					</div>
					<div class="timer__time-box">
						<span class="timer__time-box-number timer__minutes">0</span>
						<span class="timer__time-box-description">Minut</span>
					</div>
					<div class="timer__time-box">
						<span class="timer__time-box-number timer__seconds">0</span>
						<span class="timer__time-box-description">Sekund</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
`;

const toDoList = `
	<section class="todo">
        <div class="wrapper">
            <div class="todo__container">
                <div class="todo__box">
                    <div class="todo__header">
                        <h2 class="todo__title">ToDo List</h2>
                        <div class="todo__add-task-box">
                            <div class="input__box">
                                <input type="text" id="todo-task" maxlength="30">
                                <label for="todo-task">Wpisz treść zadania:</label>
                            </div>
                            <button class="btn todo__btn-add-task">
                                <div class="btn__border"></div>
                                <span class="btn__text"><i class="ti ti-plus"></i> Dodaj</span>
                            </button>
                        </div>
                    </div>
                    <div class="todo__main-box">
                        <h3 class="todo__subtitle">Lista zadań:</h3>
                        <p class="todo__no-tasks-text todo__no-tasks-text--visible">Brak zadań na liście.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="todo__notification-container"></div>
`;

// =============
// Listeners
// =============

// Buttons Active Class

btnNavNormal.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		btnClickNormal(e);
	});
});

btnNavMini.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		btnClickMini(e);
	});
});

// ====
// Buttons Projects
// ====

// About Project

btnNavNormal[0].addEventListener("click", (e) => {
	pushProject(aboutProject);
	handleButtonClickAnimation();
});
btnNavMini[0].addEventListener("click", (e) => {
	pushProject(aboutProject);
	handleButtonClickAnimation();
});

// Drink Search

btnNavNormal[1].addEventListener("click", (e) => {
	pushProject(drinkSearch);
	handleDrinkSearch();
	handleButtonClickAnimation();
});
btnNavMini[1].addEventListener("click", (e) => {
	pushProject(drinkSearch);
	handleDrinkSearch();
	handleButtonClickAnimation();
});

// Billsplitter

btnNavNormal[2].addEventListener("click", (e) => {
	pushProject(billSplitter);
	handleBillSplitter();
	handleButtonClickAnimation();
});
btnNavMini[2].addEventListener("click", (e) => {
	pushProject(billSplitter);
	handleBillSplitter();
	handleButtonClickAnimation();
});

// Form Validation

btnNavNormal[3].addEventListener("click", (e) => {
	pushProject(formValidation);
	handleFormValidation();
	handleButtonClickAnimation();
});
btnNavMini[3].addEventListener("click", (e) => {
	pushProject(formValidation);
	handleFormValidation();
	handleButtonClickAnimation();
});

// Magic 8Ball

btnNavNormal[4].addEventListener("click", (e) => {
	pushProject(magic8Ball);
	handleMagic8Ball();
	handleButtonClickAnimation();
});
btnNavMini[4].addEventListener("click", (e) => {
	pushProject(magic8Ball);
	handleMagic8Ball();
	handleButtonClickAnimation();
});

// Stopwatch

btnNavNormal[5].addEventListener("click", (e) => {
	pushProject(stopwatch);
	handleStopwatch();
	handleButtonClickAnimation();
});
btnNavMini[5].addEventListener("click", (e) => {
	pushProject(stopwatch);
	handleStopwatch();
	handleButtonClickAnimation();
});

// MyNotes

btnNavNormal[6].addEventListener("click", (e) => {
	pushProject(myNotes);
	handleMyNotes();
	handleButtonClickAnimation();
});
btnNavMini[6].addEventListener("click", (e) => {
	pushProject(myNotes);
	handleMyNotes();
	handleButtonClickAnimation();
});

// Exchange Rate App

btnNavNormal[7].addEventListener("click", (e) => {
	pushProject(exchangeRateApp);
	handleExchangeRateApp();
	handleButtonClickAnimation();
});
btnNavMini[7].addEventListener("click", (e) => {
	pushProject(exchangeRateApp);
	handleExchangeRateApp();
	handleButtonClickAnimation();
});

// Wallet

btnNavNormal[8].addEventListener("click", (e) => {
	pushProject(wallet);
	handleWallet();
	handleButtonClickAnimation();
});
btnNavMini[8].addEventListener("click", (e) => {
	pushProject(wallet);
	handleWallet();
	handleButtonClickAnimation();
});

// Timer

btnNavNormal[9].addEventListener("click", (e) => {
	pushProject(timer);
	handleTimer();
	handleButtonClickAnimation();
});
btnNavMini[9].addEventListener("click", (e) => {
	pushProject(timer);
	handleTimer();
	handleButtonClickAnimation();
});

// ToDo List

btnNavNormal[10].addEventListener("click", (e) => {
	pushProject(toDoList);
	handleToDoList();
	handleButtonClickAnimation();
});
btnNavMini[10].addEventListener("click", (e) => {
	pushProject(toDoList);
	handleToDoList();
	handleButtonClickAnimation();
});

window.addEventListener("load", function () {
	handleButtonClickAnimation();
});
