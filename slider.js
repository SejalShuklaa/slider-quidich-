document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function moveSlides(n) {
        currentSlide = (currentSlide + n + slides.length) % slides.length;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    function autoSlide() {
        moveSlides(1);
    }

    setInterval(autoSlide, 3000);

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', function () {
            moveSlides(-1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            moveSlides(1);
        });
    }
});
