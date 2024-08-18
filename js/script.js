// script.js
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for demo purposes
    if (username === 'Kajals' && password === 'Kajal@2002') {
        window.location.href = './index.html'; // Redirect to the main page
    } else {
        alert('Invalid username or password');
    }
});