/* OTURUM AÇ BUTONUNA TIKLANINCA AÇILAN BÖLÜMÜN JS KODULARI */
const loginbutton = document.querySelector(".nav-oturum-ac");
const login = document.querySelector(".navbar-login-side");
const body = document.querySelector(".body");
loginbutton.addEventListener("click", loginswitch);
function loginswitch() {
  $(login).toggleClass("show");
  $(body).toggleClass("body");
}
