/*import { Datepicker, Input, initTE } from "tw-elements";
initTE({ Datepicker, Input }, { allowReinits: true });*/

/*import {
    Validation,
    Input,
    initTE,
} from "tw-elements";

initTE({ Validation, Input });*/

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
/*function checkEmail(event) {

    //To ignore keyup events that are part of composition
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    const email = (document.querySelector("#email")).value;
    const emailElement = (document.querySelector("#email"));

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

    const password = (document.querySelector("#password")).value;
    const passwordElement = (document.querySelector("#password"));

    //Toggle valid color for password input
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (regex.test(password)) {
        passwordElement.classList.remove("invalid");
        return passwordElement.classList.add("valid");
    } else {
        passwordElement.classList.remove("valid");
        return passwordElement.classList.add("invalid");
    }
};*/

function checkPassword(event) {

    //To ignore keyup events that are part of composition
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    //const validation1 = document.querySelector("#password");
    //const form1 = document.getElementById("form-1");
    const passwordWrap = document.querySelector("#passwordWrapper");
    let valid = true;

    //validation1.addEventListener("click", (e) => {
    //e.preventDefault();
    passwordWrap.setAttribute(
        "data-te-validation-state",
        valid ? "valid" : "invalid"
    );
    //form1.setAttribute("data-te-validated", true);
    //valid = !valid;
}

//Get & handle form object
function definedElements() {

    const member = document.querySelector("#registerForm");
    const username = member[0].value;
    const firstName = member[2].value;

    sessionStorage.setItem("Username", username);
    sessionStorage.setItem("First name", firstName);
}

//document.querySelector("#email").addEventListener("keyup", checkEmail);
document.querySelector("#password").addEventListener("keyup", checkPassword);
document.querySelector("#saveButton").addEventListener("click", definedElements);
