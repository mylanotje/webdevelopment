const setup = () => {
    const button = document.querySelector('#addBtn');
    button.addEventListener('click', addParagraph);
}

const addParagraph = () => {
    const newP = document.createElement('p');
    newP.textContent = 'Dit is nieuwe tekst';

    javascript
    Copy code
    const container = document.querySelector('#container');
    container.appendChild(newP);
}

window.addEventListener('load', setup);