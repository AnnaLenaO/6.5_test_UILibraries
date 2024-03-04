//Get & handle form object
function definedElements(event) {

    const existingUsername = sessionStorage.getItem("Username");
    const existingPassword = sessionStorage.getItem("Correct Password");

    const inputUsername = document.querySelector("#username").value;
    const inputPassword = document.querySelector("#password").value;

    const errorSubmitMessage = document.querySelector("#errorSubmitMessage");

    //Prevent submit if invalid username &/or password
    if ((inputUsername !== existingUsername) || (inputPassword !== existingPassword)) {
        errorSubmitMessage.innerText = "Invalid Username or Password";
        event.preventDefault();
    }

    const member = document.querySelector("#signInForm");
    const username = member[0].value;

    sessionStorage.setItem("Username", username);
}

document.querySelector("#signInButton").addEventListener("click", definedElements);
