//Show Username & First name at member page
document.querySelector(".member__username").textContent = sessionStorage.getItem("Username");
document.querySelector(".member__firstName").textContent = sessionStorage.getItem("First name");
