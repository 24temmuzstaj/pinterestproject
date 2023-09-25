// PAROLA GİZLE GÖSTER BUTONU 
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const showButton = document.getElementById("showButton");
    const eyeIcon = showButton.querySelector("i");

    showButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        }
    });
});