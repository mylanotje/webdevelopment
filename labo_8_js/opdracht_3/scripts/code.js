// Declareer variabelen
let personen = [];
let selectedIndex = -1;

// Functie om een persoon object te maken
const maakPersoon = (voornaam, familienaam, geboortedatum, email, aantalKinderen) => {
    return {
        voornaam,
        familienaam,
        geboortedatum,
        email,
        aantalKinderen
    };
}

// Functie om een persoon op te slaan of bij te werken
const bewaarBewerktePersoon = () => {
    // Verzamel gegevens uit de UI
    const voornaam = document.getElementById("txtVoornaam").value;
    const familienaam = document.getElementById("txtFamilienaam").value;
    const geboortedatum = document.getElementById("txtGeboorteDatum").value;
    const email = document.getElementById("txtEmail").value;
    const aantalKinderen = document.getElementById("txtAantalKinderen").value;

    // Valideer invoer en controleer of er geen fouten zijn
    if (!valideer() || selectedIndex === -1) {
        return;
    }

    // Maak een nieuw persoon object en voeg het toe aan de array of werk een bestaand object bij
    const persoon = maakPersoon(voornaam, familienaam, geboortedatum, email, aantalKinderen);
    personen[selectedIndex] = persoon;

    // Werk de lijst bij in de UI
    const option = document.getElementById(selectedIndex.toString());
    option.value = JSON.stringify(persoon);
    option.text = persoon.voornaam + " " + persoon.familienaam;
}

// Functie om een nieuwe persoon te bewerken
const bewerkNieuwePersoon = () => {
    // Zet de geselecteerde index terug naar -1 om aan te geven dat er geen persoon is geselecteerd
    selectedIndex = -1;

    // Maak de UI leeg
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
}

// Functie om een geselecteerde persoon te laden
const persoonLaden = () => {
    // Verkrijg het geselecteerde element uit de lijst en converteer het naar een persoon object
    const selectElement = document.getElementById("lstPersonen");
    selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex];
    const selectedPersoon = JSON.parse(selectedOption.value);

    // Laad de gegevens van het persoon object in de UI
    document.getElementById("txtVoornaam").value = selectedPersoon.voornaam;
    document.getElementById("txtFamilienaam").value = selectedPersoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = selectedPersoon.geboortedatum;
    document.getElementById("txtEmail").value = selectedPersoon.email;
    document.getElementById("txtAantalKinderen").value = selectedPersoon.aantalKinderen;
}

const persoonBewerken = () =>{
    index = 1;
    let selectElement = document.getElementById("lstPersonen");
    const selectedIndex = selectElement.selectedIndex
    const selectedOption = selectElement.options[selectedIndex]

    const voornaam = document.getElementById("txtVoornaam").value;
    const familienaam = document.getElementById("txtFamilienaam").value;
    const geboortedatum = document.getElementById("txtGeboorteDatum").value;
    const email = document.getElementById("txtEmail").value;
    const aantalKids = document.getElementById("txtAantalKinderen").value;
    let newPersoon = maakPersoon(voornaam, familienaam, geboortedatum, email, aantalKids);

    personen[selectedOption.id] = newPersoon;
    selectedOption.text = newPersoon.voornaam + " " + newPersoon.familienaam;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", persoonLaden);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);