const sliderSlidesContainer = document.querySelector(".slider__slides");
const slides = document.querySelectorAll(".slide");
const sliderBtnPrev = document.querySelector(".slider__button_prev");
const sliderBtnNext = document.querySelector(".slider__button_next");

let slideCounter = 0;

const showSlide = (slideCounter) => {
    slides.forEach((slide) => {
        slide.classList.remove("slide_visible");
    });
    slides[slideCounter].classList.add("slide_visible");
};

sliderBtnPrev.addEventListener('click', () => {
    slideCounter = (slideCounter - 1) <= -1 ? slides.length - 1 : slideCounter - 1;
    showSlide(slideCounter);
});

sliderBtnNext.addEventListener('click', () => {
    slideCounter = (slideCounter + 1) >= slides.length ? 0 : slideCounter + 1;
    showSlide(slideCounter);
});

showSlide(slideCounter);