const setup = () =>
{
    let btnWijzig = document.getElementById("wijzig");
    btnWijzig.addEventListener("click", wijzig)
}
const wijzig = () =>
{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);