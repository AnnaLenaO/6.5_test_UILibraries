customElements.whenDefined("md-outlined-text-field");

//validate email format
//regex from https://www.w3resource.com/javascript/form/email-validation.php

//Validate strong password
//regex from https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/
//At least one lowercase alphabet i.e. [a-z]
//At least one uppercase alphabet i.e. [A-Z]
//At least one Numeric digit i.e. [0-9]
//At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]
//Also, the total length must be in the range [8-15]

//Check for valid email for visual effect
function checkEmail(event) {

    //To ignore keyup events that are part of composition
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    const email = (document.querySelector(".signup__email")).value;
    const emailElement = (document.querySelector(".signup__email"));

    //Toggle valid color for email input
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //let regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
        emailElement.classList.remove("invalid");
        return emailElement.classList.add("valid");
    } else {
        emailElement.classList.remove("valid");
        return emailElement.classList.add("invalid");
    }
}

//Check for valid password for visual effect
function checkPassword(event) {

    //To ignore keyup events that are part of composition
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    const password = (document.querySelector(".signup__password")).value;
    const passwordElement = (document.querySelector(".signup__password"));

    //Toggle valid color for password input
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (regex.test(password)) {
        passwordElement.classList.remove("invalid");
        return passwordElement.classList.add("valid");
    } else {
        passwordElement.classList.remove("valid");
        return passwordElement.classList.add("invalid");
    }
};

//Get & handle form object
function definedElements() {

    const member = Array.from(document.querySelectorAll(".signin__form md-outlined-text-field")).map((obj) => {
        return {
            label: obj.label,
            value: obj.value
        }
    })

    const username = member[0].value;
    const firstName = member[2].value;

    sessionStorage.setItem("Username", username);
    sessionStorage.setItem("First name", firstName);
}

document.querySelector(".signup__email").addEventListener("keyup", checkEmail);
document.querySelector(".signup__password").addEventListener("keyup", checkPassword);
document.querySelector("md-filled-button").addEventListener("click", definedElements);
