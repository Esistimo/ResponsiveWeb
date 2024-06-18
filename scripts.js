let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel .slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('center', 'hidden-left', 'hidden-right', 'active');
        if (index === currentSlide) {
            slide.classList.add('center', 'active');
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.classList.add('hidden-right', 'active');
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add('hidden-left', 'active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll('.carousel .slide').length;
    showSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll('.carousel .slide').length) % document.querySelectorAll('.carousel .slide').length;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    // Ensure initial state
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('.footer').classList.add('hidden');
    document.querySelectorAll('.text-box').forEach(textBox => textBox.classList.add('hidden'));
    document.querySelector('.carousel-container').classList.remove('move-up');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

function revealContent() {
    document.querySelector('.content').classList.remove('hidden');
    document.querySelector('.footer').classList.remove('hidden');
    document.querySelector('.carousel-container').classList.add('move-up');
    document.body.style.overflow = 'auto'; // Enable scrolling
}

document.getElementById('slide1').addEventListener('click', revealContent);

function toggleTextBox(modelViewer) {
    const textBox = modelViewer.closest('.model-container').querySelector('.text-box');
    if (textBox.classList.contains('hidden')) {
        textBox.classList.remove('hidden');
    } else {
        textBox.classList.add('hidden');
    }
}
