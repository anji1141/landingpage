// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1);  // Get the section id
        const targetElement = document.getElementById(targetId);  // Find the target element
        window.scrollTo({
            top: targetElement.offsetTop - 10,  // Offset to prevent header overlap
            behavior: 'smooth'  // Smooth scrolling effect
        });
    });
});

// Dynamic Greeting Message based on Time of Day
window.onload = function() {
    const greetingMessage = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingText = '';

    if (currentHour >= 5 && currentHour < 12) {
        greetingText = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = 'Good Afternoon!';
    } else {
        greetingText = 'Good Evening!';
    }

    greetingMessage.textContent = greetingText;  // Display the greeting message
}
