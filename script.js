$(document).ready(function() {
    // Otomatik geçişi başlat
    $('#carouselExampleCaptions').carousel();

    // Otomatik geçiş için fonksiyon
    function nextSlide() {
        var activeIndex = $('.carousel-item.active').index();
        var slideCount = $('.carousel-item').length;
        var nextIndex = (activeIndex + 1) % slideCount;
        $('#carouselExampleCaptions').carousel(nextIndex);
    }

    // Otomatik geçiş aralığı (3 saniye)
    var interval = setInterval(nextSlide, 5000);
});


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