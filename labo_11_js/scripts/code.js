let deTafels = []
const initializer = () =>
{
    let go = document.getElementById("go")
    go.addEventListener("click", run)
}
const run = () =>
{
    let inputveld = document.getElementById("getal")
    let nummer = inputveld.value
    if (isNaN(nummer))
    {
        alert("Je hebt geen nummer ingegeven.")
    } else
    {
        inputveld.value = ""
        deTafels.push(nummer)
        verwijderAlleTafels()
        for (let teller =0;teller<deTafels.length;teller++)
        {
            let nummer = deTafels[i]
            let table = document.createElement("div")
            table.className = "table"
            let tr = document.createElement("div")
            tr.className = "th"
            let vandaag = new Date()
            tr.innerText = `Tafel van ${nummer} aangemaakt op: ${vandaag.getHours()}:${vandaag.getMinutes()}:${vandaag.getSeconds()}`
            table.appendChild(tr)
            document.getElementById("tafels").appendChild(table)
            for (let i = 1; i <=10 ; i++) {
                let tr = document.createElement("div")
                tr.className = "tr"
                tr.innerText = `${nummer} * ${i} = ${nummer*i}`
                table.appendChild(tr)
            }
        }
    }
}
const verwijderAlleTafels = () =>
{
    let element = document.getElementById("tafels")
    while (element.firstChild)
    {
        element.removeChild(element.firstChild);
    }
}

window.addEventListener("load", initializer)