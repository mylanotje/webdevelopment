const setup = () => {
	const btnValideer = document.querySelector("#btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
};

const valideerVoornaam = () => {
	const txtVoornaam = document.querySelector("#voornaam");
	const errVoornaam = document.querySelector("#voornaam_error");
	const voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30)
	{
		txtVoornaam.classList.add("invalid");
		errVoornaam.textContent = "Maximaal 30 karakters toegestaan.";
	} else
	{
		txtVoornaam.classList.remove("invalid");
		errVoornaam.textContent = "";
	}
};

const valideerFamilienaam = () => {
	const txtFamilienaam = document.querySelector("#familienaam");
	const errFamilienaam = document.querySelector("#familienaam_error");
	const familienaam = txtFamilienaam.value.trim();
	if (familienaam.length === 0 || familienaam.length > 50) {
		txtFamilienaam.classList.add("invalid");
		errFamilienaam.textContent =
			"Familienaam mag niet leeg zijn en maximaal 50 karakters toegestaan.";
	} else
	{
		txtFamilienaam.classList.remove("invalid");
		errFamilienaam.textContent = "";
	}
};

const valideerGeboortedatum = () => {
	const txtGeboortedatum = document.querySelector("#geboortedatum");
	const errGeboortedatum = document.querySelector("#geboortedatum_error");
	const geboortedatum = txtGeboortedatum.value;
	const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	if (!geboortedatum.match(dateRegex))
	{
		txtGeboortedatum.classList.add("invalid");
		errGeboortedatum.textContent = "Geef een geldige datum in (jjjj-mm-dd).";
	} else
	{
		txtGeboortedatum.classList.remove("invalid");
		errGeboortedatum.textContent = "";
	}
};

window.addEventListener("load", setup);