window.onload = function() {
    var loginForm = document.getElementById('login-form');
    var buttonContainer = document.getElementById('button-container');

    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var usernameWarning = document.getElementById('username-warning');
    var passwordWarning = document.getElementById('password-warning');
    var allWarning = document.getElementById('all-warning');

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        var isValid = false;
        if(usernameInput.value.trim() === ''||passwordInput.value.trim() === ''){
            if (usernameInput.value.trim() === '') {
                usernameWarning.style.display = 'inline';
            } 
    
            if (passwordInput.value.trim() === '') {
                passwordWarning.style.display = 'inline';
            } 
        } else {
            usernameWarning.style.display = 'none';
            passwordWarning.style.display = 'none';
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === usernameInput.value && users[i].password === passwordInput.value) {
                    isValid = true;
                    break;
                }
            }
            if (isValid) {
                window.location.href = 'home.html'; 
                allWarning.style.display = 'none';
            } else {
                allWarning.style.display = 'inline';
            }
        }
    };
        var loginButton = document.createElement('button');
        loginButton.textContent = 'Login';
        loginButton.type = 'submit';
        buttonContainer.appendChild(loginButton);
};