const sliderTrack = document.querySelector('.image-slider-track');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth; // Assumes all slides have the same width

let currentIndex = 0; // Tracks current slide
let autoSlideInterval; // To store interval for auto-sliding

// Function to slide to the next image
function slideNext() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Loop back to the start
    }
    updateSlider();
}

// Function to slide to the previous image
function slidePrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Loop back to the end
    }
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    const offset = -currentIndex * slideWidth; // Calculate offset
    sliderTrack.style.transform = `translateX(${offset}px)`; // Move the slider
    sliderTrack.style.transition = 'transform 0.5s ease-in-out'; // Smooth animation
}

// Auto-slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(slideNext, 3000); // Slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event Listeners for manual controls (optional)
document.querySelector('.image-slider').addEventListener('mouseenter', stopAutoSlide); // Pause on hover
document.querySelector('.image-slider').addEventListener('mouseleave', startAutoSlide); // Resume on mouse leave

// Start the auto-slide on load
startAutoSlide();
