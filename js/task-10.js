function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const controls = document.querySelector('#controls');
const number = controls.firstElementChild;
const boxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');

let size = 30;
const arrayBox = [];


const createBox = (amount) => {
  for (let i = arrayBox.length; i < amount; i += 1) {
    const marup = document.createElement("div");
    marup.style.backgroundColor = getRandomHexColor();
    marup.style.width = `${size}px`;
    marup.style.height = `${size}px`;
    marup.classList.add("box");
    size += 10;
    arrayBox.push(marup);
  };
};


const handleBtnCreateClick = () => {
  createBox(number.value);
  boxes.append(...arrayBox);

};

const handleBtnDestroyClick = () => {
  boxes.innerHTML = '';
  number.value = '';
};


create.addEventListener('click', handleBtnCreateClick);
destroy.addEventListener('click', handleBtnDestroyClick);

