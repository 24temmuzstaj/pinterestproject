
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
