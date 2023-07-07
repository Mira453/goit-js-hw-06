const number = document.querySelector('#value');
const btnLeft = document.querySelector('[data-action="decrement"]');
const btnright = document.querySelector('[data-action="increment"]')

let counterValue = number.value;

counterValue = 0;


const addhandler = () => {
    counterValue += 1;
    number.textContent = counterValue;
};
const removehandler = () => {
    counterValue -= 1;
    number.textContent = counterValue;
}
btnright.addEventListener("click", addhandler);
btnLeft.addEventListener("click", removehandler);

