const sizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const fontSize = (event) => {
    event.preventDefault();
    textEl.style.fontSize = `${event.currentTarget.value}px`;

};
sizeControl.addEventListener('input', fontSize);