// JavaScript to handle auto-scrolling only on desktop view
let currentSlide = 0;
const slides = document.querySelectorAll(".slider .slide");
const mobileSlides = document.querySelectorAll(".slider-container-mobile .slide");
let autoScrollInterval;

// Function to move to the next or previous slide
function moveSlides(n) {
    // Check if desktop or mobile
    if (window.innerWidth > 768) {
        currentSlide = (currentSlide + n + slides.length) % slides.length;
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    } else {
        currentSlide = (currentSlide + n + mobileSlides.length) % mobileSlides.length;
        mobileSlides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }
}

// Auto-scroll function, but only for desktop view
function startAutoScroll() {
    if (window.innerWidth > 768) {
        autoScrollInterval = setInterval(() => {
            moveSlides(1);
        }, 3000); // Adjust the time as needed
    }
}

// Stop auto-scroll if resizing to mobile
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Start auto-scroll when the page loads if in desktop view
window.addEventListener("load", startAutoScroll);
window.addEventListener("resize", () => {
    stopAutoScroll();
    startAutoScroll();
});

// Manually call moveSlides to control with buttons
document.querySelector(".prev").addEventListener("click", () => moveSlides(-1));
document.querySelector(".next").addEventListener("click", () => moveSlides(1));
