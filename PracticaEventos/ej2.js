const emailField = document.querySelector('.email');
const passwordField = document.querySelector('.password');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const submitButton = document.querySelector('.submit');

let emailValid = false;
let passwordValid = false;

function updateSubmitButton() {
    submitButton.disabled = !(emailValid && passwordValid);
}

emailField.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailField.value)) {
        emailError.style.display = 'inline';
        emailValid = false;
    } else {
        emailError.style.display = 'none';
        emailValid = true;
    }
    updateSubmitButton();
});

passwordField.addEventListener('blur', () => {
    if (passwordField.value.length < 8 || passwordField.value.length > 10) {
        passwordError.style.display = 'inline';
        passwordValid = false;
    } else {
        passwordError.style.display = 'none';
        passwordValid = true;
    }
    updateSubmitButton();
});

emailField.addEventListener('input', () => {
    emailError.style.display = 'none';
});

passwordField.addEventListener('input', () => {
    passwordError.style.display = 'none';
});
