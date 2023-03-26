const setup = () => {
    let huts = document.querySelectorAll('li');
    for (let i = 0; i < huts.length; i++)
    {
        huts[i].classList.add("listitem");
        huts[i].style.color = "red";
    }
    let afbeelding = document.createElement("img");
    afbeelding.setAttribute('src','https://www.google.com/search?q=huts+afbeelding&tbm=isch&ved=2ahUKEwiY6ebKy_j9AhUQgP0HHcEfCIEQ2-cCegQIABAA&oq=huts+afbeelding&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQgAQ6BwgAEIoFEEM6BAgAEB46BwgAEIAEEBM6CAgAEAUQHhATOggIABAIEB4QE1CfBFiQEWCCEmgAcAB4AIABVIgB6QaSAQIxMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=irMfZJj8NJCA9u8Pwb-giAg&bih=785&biw=1440#imgrc=Fdx0n63BVlWb1M');
    voegToe(afbeelding);
}
const voegToe = (huts) => {
    document.body.appendChild(huts);
}
window.addEventListener("load", setup);