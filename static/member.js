customElements.whenDefined("md-outlined-text-field");

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

/*const textField = document.querySelector('md-outlined-text-field');
console.log(textField);
textField.addEventListener('change', () => {
    textField.setCustomValidity(getErrorMessageOrEmptyString(textField.value));
    textField.reportValidity();
});*/
