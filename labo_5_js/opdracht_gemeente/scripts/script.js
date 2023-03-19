let gemeenten = [];

while (true)
{
    let input = prompt("Voer een gemeente in of typ 'stop' om te stoppen:");

    if (input.toLowerCase() === "stop")
    {
        break;
    }

    gemeenten.push(input);
}

let keuzelijst = document.getElementById("gemeenten-lijst");
gemeenten.sort();

for (let i = 0; i < gemeenten.length; i++)
{
    let optie = document.createElement("option");
    optie.textContent = gemeenten[i];
    optie.value = gemeenten[i];
    keuzelijst.appendChild(optie);
}