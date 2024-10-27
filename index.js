
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'prev';
    prevButton.innerText = '❮';
    prevButton.addEventListener('click', prevSlide);
    
    const nextButton = document.createElement('button');
    nextButton.className = 'next';
    nextButton.innerText = '❯';
    nextButton.addEventListener('click', nextSlide);

    // Add buttons to the testimonial plugin
    const testimonialContainer = document.querySelector('.testimonial-counter-plugin');
    testimonialContainer.appendChild(prevButton);
    testimonialContainer.appendChild(nextButton);

    // Initial display
    showSlide(currentIndex);
});
