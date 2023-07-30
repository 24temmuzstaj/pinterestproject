const loginbutton = document.querySelector(".nav-oturum-ac");
const login = document.querySelector(".navbar-login-side");
loginbutton.addEventListener("click", loginswitch);
function loginswitch() {
  $(login).toggleClass("show");
}
