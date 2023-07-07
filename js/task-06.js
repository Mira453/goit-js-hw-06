const input = document.querySelector('#validation-input');


const handleInputBlur = (ent) => {
    if (ent.currentTarget.value.length >= input.dataset.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    };
}


input.addEventListener('blur', handleInputBlur);