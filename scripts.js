document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const errorMessage = document.getElementById('error-message');

    if (validateInputs(email, password)) {
        // Simulate password hashing (in real scenarios, this should be done server-side)
        const hashedPassword = hashPassword(password);

        // Simulated server response
        console.log('Email:', email);
        console.log('Hashed Password:', hashedPassword);
        console.log('Remember Me:', rememberMe);

        // Clear error message if validation is successful
        errorMessage.style.display = 'none';

        // Here you would typically send the data to the server
        // e.g., using fetch or XMLHttpRequest

        alert('Login successful! (simulation)');
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid email or password!';
    }
});

function validateInputs(email, password) {
    // Simple validation for example purposes
    return validateEmail(email) && password.length > 5;
}

function validateEmail(email) {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function hashPassword(password) {
    // A simple hash function for demonstration purposes (use a proper library in production)
    return btoa(password);
}
