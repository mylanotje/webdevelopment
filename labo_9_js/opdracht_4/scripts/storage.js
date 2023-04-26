

const storeSliderValues = () =>
{
    localStorage.setItem("red", document.getElementById("sldRed").value);
    localStorage.setItem("green", document.getElementById("sldGreen").value);
    localStorage.setItem("blue", document.getElementById("sldBlue").value);
};

const restoreSliderValues = () =>
{
    document.getElementById("sldRed").value = localStorage.getItem("red") || "128";
    document.getElementById("sldGreen").value = localStorage.getItem("green") || "255";
    document.getElementById("sldBlue").value = localStorage.getItem("blue") || "128";
};


const storeSwatches = () =>
{
    let swatches = [];
    let swatchComponents = document.getElementsByClassName("swatch");
    for (let i = 0; i < swatchComponents.length; i++) {
        let swatch = swatchComponents[i];
        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");
        swatches.push({red, green, blue});
    }
    localStorage.setItem("swatches", JSON.stringify(swatches));
};


const restoreSwatches = () =>
{
    let swatchComponents = JSON.parse(localStorage.getItem("swatches")) || [];
    for (let i = 0; i < swatchComponents.length; i++) {
        let swatchInfo = swatchComponents[i];
        addSwatchComponent(swatchInfo.red, swatchInfo.green, swatchInfo.blue);
    }
};

