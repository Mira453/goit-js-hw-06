const sizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const handleSizeControlInput = (event) => {
    event.preventDefault();
    textEl.style.fontSize = `${event.currentTarget.value}px`;

};
sizeControl.addEventListener('input', handleSizeControlInput);