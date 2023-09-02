$(document).ready(function () {
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

// Mehtap edit_profile start
function goster(icerikAdi) {
    $('#rightboxone h4').text(icerikAdi);
    
    // İçerik adına göre içeriği güncelleyebilirsiniz. Örnek içerikler ekledim.
    if (icerikAdi === 'Profili Düzenle') {
        $('#rightboxone p').text('Kişisel bilgilerinizi gizli tutun. Buraya eklediğiniz bilgiler, profilinizi görüntüleyebilen herkes tarafından görülebilir.');
        // <!-- 2.kutu -->
    } else if (icerikAdi === 'Kişisel Bilgiler') {
        $('#rightboxtwo p').text('fghjgfdgfh');
    }
    else if (icerikAdi === 'Hesap Bilgileri') {
        $('#rightboxone p').text('Hesap Bilgileriniz burada görüntülenecektir.');
    }
    else if (icerikAdi === 'Ana Sayfa Akışı') {
        $('#rightboxone p').text('anasayfaa.');
    }
    else if (icerikAdi === 'Hesaplar') {
        $('#rightboxone p').text('anasayfaa.');
    }

    $('#rightboxone').show();
}