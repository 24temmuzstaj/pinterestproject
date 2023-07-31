/* OTURUM AÇ BUTONUNA TIKLANINCA AÇILAN BÖLÜMÜN JS KODULARI */
const loginbutton = document.querySelector(".nav-oturum-ac");
const login = document.querySelector(".navbar-login-side");
const exitbutton = document.querySelector(".exit-button");
const body = document.querySelector(".body");
function loginswitch() {
  $(login).toggleClass("show");
  $(body).toggleClass("body");
}
loginbutton.addEventListener("click", loginswitch);
exitbutton.addEventListener("click", exit);
function exit(event) {
  $(login).toggleClass("show");
  event.preventDefault();
}
