const input = document.querySelector('#validation-input');


const valid = (ent) => {
    if (ent.currentTarget.value.length >= input.dataset.length) {
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    };
}


input.addEventListener('blur', valid);