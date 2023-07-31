
const carousel = document.getElementById('carouselExampleCaptions');
const indicators = carousel.querySelectorAll('.carousel-indicators button');
const slides = carousel.querySelectorAll('.carousel-item');

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        carousel.querySelector('.carousel-indicators .active').classList.remove('active');
        indicator.classList.add('active');
        const slideWidth = slides[0].offsetWidth;
        carousel.querySelector('.carousel-inner').style.transform = `translateX(-${index * slideWidth}px)`;
    });
});

