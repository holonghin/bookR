

window.onload = function() {
    var registerForm = document.getElementById('register-form');
    var submitButton = document.getElementById('submit-button');

    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');

    var firstNameWarning = document.getElementById('first-name-warning');
    var lastNameWarning = document.getElementById('last-name-warning');
    var usernameWarning = document.getElementById('username-warning');
    var passwordWarning = document.getElementById('password-warning');
    var confirmPasswordWarning = document.getElementById('confirm-password-warning');

    registerForm.onsubmit = function(e) {
        e.preventDefault();
        var isValid = true;

        if (firstNameInput.value.trim() === '') {
            firstNameWarning.style.display = 'inline';
            isValid = false;
        } else {
            firstNameWarning.style.display = 'none';
        }

        if (lastNameInput.value.trim() === '') {
            lastNameWarning.style.display = 'inline';
            isValid = false;
        } else {
            lastNameWarning.style.display = 'none';
        }

        if (usernameInput.value.trim() === '') {
            usernameWarning.style.display = 'inline';
            isValid = false;
        } else {
            usernameWarning.style.display = 'none';
        }

        if (passwordInput.value.trim() === '' || passwordInput.value.length < 8) {
            passwordWarning.style.display = 'inline';
            isValid = false;
        } else {
            passwordWarning.style.display = 'none';
        }

        if (confirmPasswordInput.value.trim() === '' || confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value.length < 8) {
            confirmPasswordWarning.style.display = 'inline';
            isValid = false;
        } else {
            confirmPasswordWarning.style.display = 'none';
        }

        if (isValid) {
            alert('Registration success');
            window.location.href = 'login.html';
        }
    };

    var buttonContainer = document.getElementById('button-container');

    var submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    buttonContainer.appendChild(submitButton);

};
