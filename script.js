
$(document).ready(function() {
    // Otomatik geçişi başlat
    $('#carouselExampleCaptions').carousel();

    // Otomatik geçiş için fonksiyon
    function nextSlide() {
        $('#carouselExampleCaptions').carousel('next');
    }

    // Otomatik geçiş aralığı (3 saniye)
    var interval = setInterval(nextSlide, 3000);
});
