const handleExchangeRateApp = () => {
	const input1 = document.querySelector(".input-1");
	const input2 = document.querySelector(".input-2");

	const selectCurrency1 = document.querySelector("#currency-1");
	const selectCurrency2 = document.querySelector("#currency-2");

	const fetchURL = `https://api.exchangerate.host/latest?base=${selectCurrency1.value}&symbols=${selectCurrency2.value}`;

	const calcRate = () => {};
	fetch(fetchURL)
		.then((res) => {
			res.json();
		})
		.then((data) => {
			console.log(data);
		});
};
