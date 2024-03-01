customElements.whenDefined("md-outlined-text-field");

//Validate strong password
//regex from https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/
//At least one lowercase alphabet i.e. [a-z]
//At least one uppercase alphabet i.e. [A-Z]
//At least one Numeric digit i.e. [0-9]
//At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]
//Also, the total length must be in the range [8-15]

function checkPassword(event) {
    //To ignore keyup events that are part of composition
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    const password = (document.querySelector(".signup__password")).value;
    console.log(password);
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

      /* if (password.length > 15)
        return console.log(
            password + " Password is too lengthy"
        );
    else if (password.length < 8)
        return console.log(
            password + " Password is too short"
        );*/

        /*let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (regex.test(password)) {
            return console.log(password
                + " Password is strong");
        }*/

   /* let count = 0;
    let regex1 = /[a-z]/;
    if (regex1.test(password)) count++;
    let regex2 = /[A-Z]/;
    if (regex2.test(password)) count++;
    let regex3 = /[\d]/;
    if (regex3.test(password)) count++;
    let regex4 = /[!@#$%^&*.?]/;
    if (regex4.test(password)) count++;

    const strength = {
        1: "very Weak",
        2: "Weak",
        3: "Meduim",
        4: "Strong",
    };

    console.log(password, "Pasword is " + strength[count]);*/
};

document.querySelector(".signup__password").addEventListener("keyup", checkPassword);

//Get & handle form object
function definedElements() {
    //const member = Array.from(document.querySelectorAll('.signin__form md-outlined-text-field'))[0].value;
    const member = Array.from(document.querySelectorAll(".signin__form md-outlined-text-field")).map((obj) => {
        return {
            label: obj.label,
            value: obj.value
        }
    })
    //.map(({ label, value }) => ({ [label]: value}));
    console.log(member);
    
    const username = member[0].value;
    const firstName = member[2].value;
    console.log(username);
    console.log(firstName);

    sessionStorage.setItem("Username", username);
    sessionStorage.setItem("First name", firstName);
}

document.querySelector("md-filled-button").addEventListener("click", definedElements);
