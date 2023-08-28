
// Get a reference to the parent container where the elements will be added
const container = document.querySelector('.container');

// Create the main container
const loginContainer = document.createElement('div');
loginContainer.classList.add('login__container');

// Create the inner signin container
const signinContainer = document.createElement('div');
signinContainer.classList.add('login__signin');

// Create the signin-now container
const signinNowContainer = document.createElement('div');
signinNowContainer.classList.add('login__signin-now');

// Create the heading elements
const h1 = document.createElement('h1');
h1.textContent = 'Sign up NOW!';

const h3 = document.createElement('h3');
h3.textContent = 'Enter your details';

// Create the form element
const form = document.createElement('form');

// Create email input field
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';

const emailInput = document.createElement('input');
emailInput.classList.add('input-field');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;

emailLabel.appendChild(emailInput);

// Create password input field
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';

const passwordInput = document.createElement('input');
passwordInput.classList.add('input-field');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;

passwordLabel.appendChild(passwordInput);

// Create confirm password input field
const cPasswordLabel = document.createElement('label');
cPasswordLabel.textContent = 'Confirm Password';

const cPasswordInput = document.createElement('input');
cPasswordInput.classList.add('input-field');
cPasswordInput.type = 'password';
cPasswordInput.placeholder = 'Confirm Password';
cPasswordInput.required = true;

cPasswordLabel.appendChild(cPasswordInput);

// Create submit button
const submitButton = document.createElement('button');
submitButton.classList.add('filled-btn');
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';

// Append elements to their respective containers
form.appendChild(emailLabel);
form.appendChild(passwordLabel);
form.appendChild(cPasswordLabel);
form.appendChild(submitButton);

signinNowContainer.appendChild(h1);
signinNowContainer.appendChild(h3);
signinNowContainer.appendChild(form);

signinContainer.appendChild(signinNowContainer);

loginContainer.appendChild(signinContainer);

container.appendChild(loginContainer);

//Step 1.1
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
  
    // Rest of your existing code to create and append elements
    document.addEventListener('DOMContentLoaded', function() {
        // Check if the DOM is ready
      
        // Your code to create and append HTML elements
      
        const passwordInput = document.querySelector('input[type="password"]');
        const cPasswordInput = document.querySelector('input[type="cPassword"]');
        const submitButton = document.getElementById('submit-btn');
        const errorText = document.createElement('p');
        errorText.classList.add('error-message');
        errorText.textContent = "Passwords do not match";
      
        cPasswordInput.addEventListener('input', function() {
          // Your input validation logic here
        });
      
        submitButton.addEventListener('click', function(event) {
          // Your form submission and validation logic here
        });
    });
});
cPasswordInput.addEventListener('input', function() {
    if (cPasswordInput.value === passwordInput.value) {
      if (errorText.parentNode) {
        errorText.parentNode.removeChild(errorText);
      }
    } else {
      if (!cPasswordInput.parentNode.contains(errorText)) {
        cPasswordInput.parentNode.appendChild(errorText);
      }
    }
  });

  submitButton.addEventListener('click', function(event) {
    if (cPasswordInput.value !== passwordInput.value) {
      event.preventDefault(); // Prevent form submission
      if (!cPasswordInput.parentNode.contains(errorText)) {
        cPasswordInput.parentNode.appendChild(errorText);
      }
    } else {
      // Redirect to quote.html
      window.location.href = 'quote.html';
    }
  });

//Step 2
