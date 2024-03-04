//Show Username & First name at member page
document.querySelector("#memberUsername").textContent = sessionStorage.getItem("Username");
document.querySelector("#memberFirstName").textContent = sessionStorage.getItem("First name");
