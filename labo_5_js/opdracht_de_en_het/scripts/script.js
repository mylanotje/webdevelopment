let zin = document.getElementById("input").textContent;
let woorden = zin.split(" ");

for (let i = 0; i < woorden.length; i++)
{
    if (woorden[i] === "de")
    {
        woorden[i] = "het";
    }
}

zin = woorden.join(" ");
console.log(zin);