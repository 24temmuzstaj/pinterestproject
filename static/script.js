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

// PAROLA GİZLE GÖSTER BUTONU 
document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("password");
  const showButton = document.getElementById("showButton");
  const eyeIcon = showButton.querySelector("i");

  showButton.addEventListener("click", function() {
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