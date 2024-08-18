document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check for empty fields
    if (username.trim() === '' || password.trim() === '') {
        alert('Username and password cannot be empty');
        return;
    }

    // Simple check for demo purposes
    if (username === 'Kajals' && password === 'Kajal@2002') {
        window.location.href = './index.html'; // Redirect to the main page
    } else {
        alert('Invalid username or password');
    } // Closing brace for else block
});