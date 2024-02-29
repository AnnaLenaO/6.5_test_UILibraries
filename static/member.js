customElements.whenDefined('md-outlined-text-field');

function definedElements() {
    //const member = Array.from(document.querySelectorAll('.signin__form md-outlined-text-field'))[0].value;
    const member = Array.from(document.querySelectorAll('.signin__form md-outlined-text-field')).map((obj) => {
        return {
            label: obj.label,
            value:  obj.value
        }
    })
    .map(({ label, value }) => ({ [label]: value}));
    console.log(member);
}

/*function handleSubmit(e){
    e.preventDefault();
}*/

document.querySelector('md-filled-button').addEventListener("submit", definedElements, /*handleSubmit(e)*/);

/*const textField = document.querySelector('md-outlined-text-field');
console.log(textField);
textField.addEventListener('change', () => {
    textField.setCustomValidity(getErrorMessageOrEmptyString(textField.value));
    textField.reportValidity();
});*/
