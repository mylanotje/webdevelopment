// initialiseer variabelen en functies
const global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_NUMBER: 0,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    move_delay: 2000,
    score: 0,
};

let timerId;
const startButton = document.getElementById("startGame");
const aantalHits = document.getElementById("aantalHits");
const image = document.getElementById("image");

// initialiseer spel bij klik op start knop
const setupGame = () => {
    startButton.addEventListener("click", startPlay);
};

// start het spel
const startPlay = () => {
    startButton.style.display = "none";
    timerId = setInterval(updateImage, global.move_delay);
    image.addEventListener("click", addHits);
};

// update de positie en afbeelding van het object
const updateImage = () => {
    const maxWidth = document.getElementById("playField").clientWidth - global.IMAGE_SIZE + 1;
    const maxHeight = document.getElementById("playField").clientHeight - global.IMAGE_SIZE + 1;
    const newLeft = Math.floor(Math.random() * maxWidth);
    const newTop = Math.floor(Math.random() * maxHeight);
    global.IMAGE_NUMBER = Math.floor(Math.random() * global.IMAGE_COUNT);
    const newImagePath = global.IMAGE_PATH_PREFIX + global.IMAGE_NUMBER + global.IMAGE_PATH_SUFFIX;
    image.src = newImagePath;
    image.style.left = newLeft + "px";
    image.style.top = newTop + "px";
};

// verhoog score bij klik op object
const addHits = () => {
    if (global.IMAGE_NUMBER !== 0) {
        global.score++;
        clearTimeout(timerId);
        timerId = setInterval(updateImage, global.move_delay);
        updateImage();
    } else {
        alert("Je bent verloren!");
        clearTimeout(timerId);
    }
    aantalHits.innerText = `Aantal Hits: ${global.score}`;
};

// voeg event listener toe voor het laden van de pagina
window.addEventListener("load", setupGame);