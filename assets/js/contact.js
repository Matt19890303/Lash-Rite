const contactForm = document.getElementById('contactForm');
const successMessageContainer = document.getElementById('successMessageContainer');
const errorMessageContainer = document.getElementById('errorMessageContainer');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Send the email using EmailJS
  emailjs.send('service_hz6mbdg', 'template_tw7sf1w', {
    name: name,
    email: email,
    subject: subject,
    message: message
  })

  .then(function(response) {
    console.log('Email sent successfully!', response.status, response.text);
    // Create a success message element
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Email sent successfully!';
    successMessage.classList.add('success-message');
    // Append the success message to the container
    successMessageContainer.appendChild(successMessage);
    
    // Remove the success message after 6 seconds
    // setTimeout(function() {
    //     successMessageContainer.removeChild(successMessage);
    // }, 6000);

    // Reset the form
    contactForm.reset();

  }, function(error) {
    console.error('Failed to send email:', error);
    // Create a Failed message element
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Email sent successfully!';
    errorMessage.classList.add('error-message');
    // Append the success message to the container
    errorMessageContainer.appendChild(errorMessage);
    // Remove the success message after 5 seconds
    setTimeout(function() {
        errorMessageContainer.removeChild(errorMessage);
    }, 5000); 
  });
});