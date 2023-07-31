/* OTURUM AÇ BUTONUNA TIKLANINCA AÇILAN BÖLÜMÜN JS KODULARI */
const loginbutton = document.querySelector(".nav-oturum-ac");
const registerbutton = document.querySelector(".nav-kaydol");
const login = document.querySelector(".navbar-login-side");
const register = document.querySelector(".navbar-register-side");
const exitbutton = document.querySelector(".exit-button");
const register_exit_button = document.querySelector(".register-exit-button");

loginbutton.addEventListener("click", loginswitch);
registerbutton.addEventListener("click", registerswitch);
exitbutton.addEventListener("click", loginexit);
register_exit_button.addEventListener("click", registerexit);

function loginswitch() {
  $(login).toggleClass("show");
}
function registerswitch() {
  $(register).toggleClass("show");
}
function loginexit(event) {
  $(login).toggleClass("show");
  event.preventDefault();
}
function registerexit(event) {
  $(register).toggleClass("show");
  event.preventDefault();
}
