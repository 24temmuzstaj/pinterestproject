/* OTURUM AÇ BUTONUNA TIKLANINCA AÇILAN BÖLÜMÜN JS KODULARI */
const loginbutton = document.querySelector(".nav-oturum-ac");
const registerbutton = document.querySelector(".nav-kaydol");
const login = document.querySelector(".navbar-login-side");
const register = document.querySelector(".navbar-register-side");
const exitbutton = document.querySelector(".exit-button");

loginbutton.addEventListener("click", loginswitch);
registerbutton.addEventListener("click", registerswitch);
exitbutton.addEventListener("click", exit);

function loginswitch() {
  $(login).toggleClass("show");
}
function registerswitch() {
  $(register).toggleClass("show");
}
function exit(event) {
  $(login).toggleClass("show");
  event.preventDefault();
}
