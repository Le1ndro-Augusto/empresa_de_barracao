const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let counter = 1;
const slideWidth = slides[0].clientWidth;

carousel.style.transform = `translateX(${-slideWidth * counter}px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= slides.length - 1) return;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});

carousel.addEventListener('transitionend', () => {
    if (slides[counter].classList.contains('carousel-slide')) return;
    carousel.style.transition = 'none';
    counter = slides.length - 3;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});
