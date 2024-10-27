
document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.summary-block-wrapper .summary-item');
    let index = 0;
    const intervalTime = 5000; // Interval time in milliseconds (e.g., 5000ms = 5 seconds)
    
    function showTestimonial() {
        // Remove 'active' class from all testimonials
        testimonials.forEach((item) => item.classList.remove('active'));

        // Add 'active' class to the current testimonial
        testimonials[index].classList.add('active');

        // Move to the next testimonial
        index = (index + 1) % testimonials.length;
    }
    // Initialize first testimonial
    showTestimonial();
    // Set interval for testimonial rotation
    setInterval(showTestimonial, intervalTime);
});
