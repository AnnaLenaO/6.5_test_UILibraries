//Get & handle form object
function definedElements() {

    const member = document.querySelector("#signInForm");
    const username = member[0].value;
    
    sessionStorage.setItem("Username", username);
}

document.querySelector("#signInButton").addEventListener("click", definedElements);