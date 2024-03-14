window.onload = function() {
    var loginForm = document.getElementById('login-form');
    var buttonContainer = document.getElementById('button-container');

    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var usernameWarning = document.getElementById('username-warning');
    var passwordWarning = document.getElementById('password-warning');

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        var isValid = true;

        if (usernameInput.value.trim() === '') {
            usernameWarning.style.display = 'inline';
            isValid = false;
        } else {
            usernameWarning.style.display = 'none';
        }

        if (passwordInput.value.trim() === '') {
            passwordWarning.style.display = 'inline';
            isValid = false;
        } else {
            passwordWarning.style.display = 'none';
        }

        if (isValid) {
            window.location.href = 'home.html'; // replace 'home.html' with the path to your home page
        }
    };
        var loginButton = document.createElement('button');
        loginButton.textContent = 'Login';
        loginButton.type = 'submit';
        buttonContainer.appendChild(loginButton);
};