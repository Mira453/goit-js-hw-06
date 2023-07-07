function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');


const handleBtnChangeColorClick = (ent) => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `${getRandomHexColor()}`;
}


btnChangeColor.addEventListener('click', handleBtnChangeColorClick)
