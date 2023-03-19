const tekst = document.getElementById("input");
const word = tekst.textContent;

for (let i = 0; i < word.length - 2; i++)
{
    const trigram = word.substring(i, i + 3);
    console.log(trigram);
}