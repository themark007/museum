document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy check for login
    if (username && password) {
        // Redirect to index.html on successful login
        window.location.href = '/';
    } else {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    }
});
