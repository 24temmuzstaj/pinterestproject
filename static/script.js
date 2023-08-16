$(document).ready(function () {
  // Otomatik geçişi başlat
  $("#carouselExampleCaptions").carousel(); // Otomatik geçiş için fonksiyon

  function nextSlide() {
    var activeIndex = $(".carousel-item.active").index();
    var slideCount = $(".carousel-item").length;
    var nextIndex = (activeIndex + 1) % slideCount;
    $("#carouselExampleCaptions").carousel(nextIndex);
  } // Otomatik geçiş aralığı (3 saniye)

  var interval = setInterval(nextSlide, 5000);
});

// PAROLA GİZLE GÖSTER BUTONU
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const shower = document.querySelector(".shower");

  shower.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      shower.classList.remove("fa-eye-slash");
      shower.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      shower.classList.remove("fa-eye");
      shower.classList.add("fa-eye-slash");
    }
  }); // Şifre alanının dışına tıklandığında şifrenin gizli hale gelmesi

  document.addEventListener("click", (e) => {
    if (e.target !== passwordInput) {
      passwordInput.type = "password";
      shower.classList.remove("fa-eye");
      shower.classList.add("fa-eye-slash");
    }
  });
});
