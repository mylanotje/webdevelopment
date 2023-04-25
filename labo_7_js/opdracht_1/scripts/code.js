let personen = [];

// Event listener (btnBewaar click)

// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    if (document.querySelectorAll('.errorMessage').length === 0) {
        const voornaam = document.getElementById("txtVoornaam").value;
        const familienaam = document.getElementById("txtFamilienaam").value;
        const geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        const email = document.getElementById("txtEmail").value;
        const aantalKinderen = document.getElementById("txtAantalKinderen").value;

        const persoon = {
            voornaam,
            familienaam,
            geboorteDatum,
            email,
            aantalKinderen
        };

        const bestaandePersoon = personen.find(p => p.email === persoon.email);

        if (bestaandePersoon) {
            bestaandePersoon.voornaam = persoon.voornaam;
            bestaandePersoon.familienaam = persoon.familienaam;
            bestaandePersoon.geboorteDatum = persoon.geboorteDatum;
            bestaandePersoon.aantalKinderen = persoon.aantalKinderen;
        } else {
            personen.push(persoon);
        }

        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
        updatePersonenLijst();

        // maak het formulier leeg
        document.getElementById("txtVoornaam").value = "";
        document.getElementById("txtFamilienaam").value = "";
        document.getElementById("txtGeboorteDatum").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtAantalKinderen").value = "";
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);