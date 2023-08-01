$(document).ready(function () {
    // Otomatik geçiş için fonksiyon
    function nextSlide() {
        var activeSlide = $('.carousel-item.active');
        var nextSlide = activeSlide.next('.carousel-item');
        if (!nextSlide.length) {
            // Eğer son slaytta ise, ilk slayta dön
            nextSlide = $('.carousel-item').first();
        }
        activeSlide.removeClass('active');
        nextSlide.addClass('active');
    }

    // Otomatik geçiş aralığı (3 saniye)
    var interval = setInterval(nextSlide, 3000);

    // İlk slaydı seçili yap
    $('.carousel-item').first().addClass('active');
});