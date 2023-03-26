const initialize = () => {
    const sliders = document.querySelectorAll(".slider");

    for (const slider of sliders) {
        slider.addEventListener("change", update);
        slider.addEventListener("input", update);
    }

    const button = document.querySelector("button");
    button.addEventListener("click", save);

    update();
};

const getRGBString = () => {
    updateLBL();
    const red = getRedSlider();
    const green = getGreenSlider();
    const blue = getBlueSlider();

    return `rgb(${red}, ${green}, ${blue})`;
};

const getRedSlider = () => {
    return document.querySelector("#sldRed").value;
};

const getGreenSlider = () => {
    return document.querySelector("#sldGreen").value;
};

const getBlueSlider = () => {
    return document.querySelector("#sldBlue").value;
};

const updateLBL = () => {
    document.querySelector("#lblRed").textContent = getRedSlider();
    document.querySelector("#lblGreen").textContent = getGreenSlider();
    document.querySelector("#lblBlue").textContent = getBlueSlider();
};

const update = () => {
    updateLBL();
    mainSwatchInvullen();
};

const mainSwatchInvullen = () => {
    const swatch = document.querySelector("#swatch");
    swatch.style.backgroundColor = getRGBString();
};

const updateSliderValues = (red, green, blue) => {
    document.querySelector("#sldRed").value = red;
    document.querySelector("#sldGreen").value = green;
    document.querySelector("#sldBlue").value = blue;
};

const restore = (event) => {
    const geklikteStyle = event.target.style.backgroundColor.replace(/ /g, "");
    const tekst = geklikteStyle.slice(4, -1);
    const [red, green, blue] = tekst.split(",");

    updateSliderValues(red, green, blue);
    updateLBL();
    mainSwatchInvullen();
};

const clear = (event) => {
    const parent = event.target.parentElement;
    const saved = parent.parentElement;
    saved.removeChild(parent);
    event.stopPropagation();
};

const createClearButton = () => {
    const clearButton = document.createElement("button");
    clearButton.innerText = "X";
    clearButton.addEventListener("click", clear);
    clearButton.classList.add("clear_btn");

    return clearButton;
};

const save = () => {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRGBString();
    newDiv.classList.add("swatch");
    newDiv.addEventListener("click", restore);
    newDiv.appendChild(createClearButton());

    const divSaved = document.querySelector("#saved");
    divSaved.appendChild(newDiv);
};

window.addEventListener("load", initialize);
