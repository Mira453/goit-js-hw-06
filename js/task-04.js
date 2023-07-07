const number = document.querySelector('#value');
const btnLeft = document.querySelector('[data-action="decrement"]');
const btnright = document.querySelector('[data-action="increment"]')

let counterValue = number.value;

counterValue = 0;


const handleBtnRightClick = () => {
    counterValue += 1;
    number.textContent = counterValue;
};
const  handlerBtnLeftClick = () => {
    counterValue -= 1;
    number.textContent = counterValue;
}
btnright.addEventListener("click", handleBtnRightClick);
btnLeft.addEventListener("click",  handlerBtnLeftClick);

