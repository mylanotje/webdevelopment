const setup = () => {
	let btnKopieer = document.getElementById("btnKopieer");
	btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
	let txtInput = document.getElementById("txtInput").value;
	let tekst = txtInput.toString();
	let pElement = document.getElementById("txtOutput");
	pElement.innerHTML = tekst;
}
window.addEventListener("load", setup);



















