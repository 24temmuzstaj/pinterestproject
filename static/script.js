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

// Profili Düzenle linkine tıklandığında
document.getElementById("profilLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik1").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik1");
});

// Kişisel Bilgiler linkine tıklandığında
document.getElementById("bilgilerLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik2").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik2");
});
// Hesap Yönetimi linkine tıklandığında
document.getElementById("hesapLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik3").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik3");
});

// Ana Sayfa Akışınızı Ayarlayın linkine tıklandığında
document.getElementById("akısLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik4").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik4");
});

// Üzerinize Aldığınız Hesaplar linkine tıklandığında
document.getElementById("aldıgınızLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik5").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik5");
});

// Sosyal İzinler linkine tıklandığında
document.getElementById("izinlerLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik6").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik6");
});

// Bildirimler linkine tıklandığında
document.getElementById("bildirimLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik7").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik7");
});

// Gizlilik ve Veriler linkine tıklandığında
document.getElementById("gizlilikLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik8").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik8");
});

// Güvenlik ve Oturum Açma linkine tıklandığında
document.getElementById("guvenlikLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik9").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik9");
});

// Markalı İçerikler linkine tıklandığında
document.getElementById("markaLink").addEventListener("click", function () {
    // İlgili içeriği görünür yap
    document.getElementById("icerik10").style.display = "block";
    // Diğer içerikleri gizle
    hideOtherContent("icerik10");
});

// Diğer içerikleri gizlemek için yardımcı bir işlev
function hideOtherContent(currentContentId) {
    const contentIds = ["icerik1", "icerik2", "icerik3", "icerik4", "icerik5", "icerik6", "icerik7", "icerik8", "icerik9", "icerik10"];
    contentIds.forEach(function (id) {
        if (id !== currentContentId) {
            document.getElementById(id).style.display = "none";
        }
    });
}

function goster(contentId) {
    // Tüm içerikleri gizle
    var contentItems = document.querySelectorAll('.content-item');
    for (var i = 0; i < contentItems.length; i++) {
        contentItems[i].style.display = 'none';
    }

    // Belirli içeriği göster
    var contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
}


// Mehtap edit_profile end