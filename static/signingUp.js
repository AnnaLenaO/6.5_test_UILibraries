//Validate strong password
//regex from https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/
//At least one lowercase alphabet i.e. [a-z]
//At least one uppercase alphabet i.e. [A-Z]
//At least one Numeric digit i.e. [0-9]
//At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]
//Also, the total length must be in the range [8-15]

//Check for valid password for visual effect
function checkPassword(event) {

    //To ignore keyup events that are part of composition
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    const password = document.querySelector("#password").value;
    const errorMessage = document.querySelector("#errorMessage");
    const errorSubmitMessage = document.querySelector("#errorSubmitMessage");

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (regex.test(password)) {
        errorMessage.innerText = "Strong Password";
        errorSubmitMessage.innerText = "";
        errorMessage.classList.remove("text-red-500")
        return errorMessage.classList.add("text-green-500");
    } else if (password.length > 15) {
        errorMessage.innerText = "Too many characters";
        errorMessage.classList.remove("text-green-500")
        return errorMessage.classList.add("text-red-500");
    } else {
        errorMessage.innerText = "Weak Password";
        errorMessage.classList.remove("text-green-500")
        return errorMessage.classList.add("text-red-500");
    }
}

//Get & handle form object
function definedElements(event) {

    const password = document.querySelector("#password").value;
    const errorSubmitMessage = document.querySelector("#errorSubmitMessage");

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    //Prevent submit if invalid password
    if (!regex.test(password)) {
        errorSubmitMessage.innerText = "Change your password";
        event.preventDefault();
    }

    const member = document.querySelector("#registerForm");
    const username = member[0].value;
    const firstName = member[1].value;
    const correctPassword = member[4].value;
    console.log(correctPassword);

    sessionStorage.setItem("Username", username);
    sessionStorage.setItem("First name", firstName);
    sessionStorage.setItem("Correct Password", correctPassword);
}

document.querySelector("#password").addEventListener("keyup", checkPassword);
document.querySelector("#saveButton").addEventListener("click", definedElements);
