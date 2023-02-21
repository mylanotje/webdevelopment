const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", getSubstring);
}

const getSubstring = () =>{
    let input = document.getElementById("input").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let output = document.getElementById("output");
    let text = input.toString();

    output.innerHTML = text.substring(start, end);
}
window.addEventListener("load", setup);