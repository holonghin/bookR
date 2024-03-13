window.onload = function() {
    var buttonContainer = document.getElementById('button-container');

    var loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.type = 'submit';
    buttonContainer.appendChild(loginButton);
};