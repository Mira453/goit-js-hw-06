const form = document.querySelector('.login-form');


const handleFormSubmit = (ent) => {
    ent.preventDefault();
    const formElements = ent.currentTarget.elements;
    if (formElements.email.value === "" || formElements.password.value === "") {
        alert("All fields should be filled");
    } else {
        const information = {
            email: formElements.email.value,
            password: formElements.password.value,
        };
        console.log(information);
        ent.currentTarget.reset();
    };

};


form.addEventListener('submit', handleFormSubmit);
