document.addEventListener('DOMContentLoaded', function () {
    // Handle Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate sending the form data (for demonstration purposes)
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');

        // Optionally: You can handle the form data here, e.g., send it to a server

        // Reset the form fields
        document.getElementById('contactForm').reset();
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Smooth scroll to the section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
