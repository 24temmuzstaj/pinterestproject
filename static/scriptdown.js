function goToNextSection() {
    const currentSection = document.querySelector("section.active");
    if (currentSection) {
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
        const topOffset = nextSection.offsetTop;window.scrollTo({
        top: topOffset,behavior: 'smooth'
        });
    }
    }
}
