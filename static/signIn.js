customElements.whenDefined("md-outlined-text-field");

//Get & handle form object
function definedElements() {

    const member = Array.from(document.querySelectorAll(".signin__form md-outlined-text-field")).map((obj) => {
        return {
            label: obj.label,
            value: obj.value
        }
    })

    const username = member[0].value;

    sessionStorage.setItem("Username", username);
}

document.querySelector("md-filled-button").addEventListener("click", definedElements);
