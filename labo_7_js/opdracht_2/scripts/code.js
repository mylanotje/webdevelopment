const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;

const kaarten = [    'kaart1.png',    'kaart2.png',    'kaart3.png',    'kaart4.png',    'kaart5.png',    'kaart6.png'];

let gameBoard = document.getElementById("gameBoard");
let kaartenArray = [];
let flippedCards = [];
let matchedCards = [];

// Maak het speelbord
for (let i = 0; i < AANTAL_VERTICAAL; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < AANTAL_HORIZONTAAL; j++) {
        let kaart = document.createElement("div");
        kaart.classList.add("card");
        let image = document.createElement("img");
        image.classList.add("front");
        let randomIndex = Math.floor(Math.random() * AANTAL_KAARTEN);
        let randomKaart = kaarten[randomIndex];
        kaartenArray.push(randomKaart);
        kaarten.splice(randomIndex, 1);
        image.setAttribute("src", "images/" + randomKaart);
        kaart.appendChild(image);
        row.appendChild(kaart);
        kaart.addEventListener("click", flipCard);
    }
    gameBoard.appendChild(row);
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("show")) {
        this.classList.add("show");
        flippedCards.push(this);
        if (flippedCards.length == 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    if (flippedCards[0].querySelector(".front").getAttribute("src") == flippedCards[1].querySelector(".front").getAttribute("src")) {
        flippedCards[0].classList.add("matched");
        flippedCards[1].classList.add("matched");
        matchedCards.push(flippedCards[0], flippedCards[1]);
        if (matchedCards.length == AANTAL_HORIZONTAAL * AANTAL_VERTICAAL) {
            alert("Gefeliciteerd! Je hebt het spel gewonnen!");
        }
    } else {
        flippedCards[0].classList.remove("show");
        flippedCards[1].classList.remove("show");
    }
    flippedCards = [];
}