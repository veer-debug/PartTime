window.onload = function() {
    const header = document.getElementById('header');
    header.classList.remove('-translate-y-full', 'opacity-0'); // Remove initial classes to trigger animation
    header.classList.add('translate-y-0', 'opacity-100'); // Add classes to show header

    // Array of image-box elements
    const boxes = document.querySelectorAll('.image-box');

    // Add slide-in class to each box (image + text) with delay
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = '1';  // Ensure each box becomes visible
            box.classList.add('slide-in');
        }, index * 300);  // Delay of 300ms for each image-text box
    });

    // Fade in the additional text word by word
    const additionalText = document.getElementById('additionalText').querySelector('h2');
    const words = "Thank you for viewing our smartphone gallery!".split(' '); // Split the additional text into words

    // Create a span for each word and add it to the additional text
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' '; // Add a space after each word
        span.className = 'opacity-0 transition-opacity duration-300'; // Set initial styles
        additionalText.appendChild(span); // Add the word to the additional text

        // Animate the word
        setTimeout(() => {
            span.style.opacity = '1'; // Fade in the word
            span.classList.add('slide-in'); // Add slide-in class
        }, boxes.length * 200 + index * 50); // Delay based on index
    });
};
