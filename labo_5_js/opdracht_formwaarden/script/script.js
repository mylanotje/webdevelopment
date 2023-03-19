const processForm = () => {
    if (document.getElementById("smoker"))
    {
        console.log("is geen roker");
    }
    else
    {
        console.log("is een roker");
    }

    console.log("moedertaal is " + document.getElementsByName("moedertaal")[0].value)

    console.log("favoriete buurland is " + document.getElementsByName("buurland")[0].value);

    let bestellingen = document.getElementsByName("bestelling")[0];
    let geselecteerd = "";
    for (let index = 0; index < bestellingen.length; index++)
    {
        if (bestellingen[index].selected)
        {
            geselecteerd += bestellingen[index].value + " ";
        }
    }
    console.log("bestelling bestaat uit " + geselecteerd);
};

const setupForm = () => {
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", processForm);
};

window.addEventListener("load", setupForm);