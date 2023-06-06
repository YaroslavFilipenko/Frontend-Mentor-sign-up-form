document.addEventListener('DOMContentLoaded', function() {
    // const form = document.getElementById('form');
    const formButton = document.querySelector('.form-button');
          formButton.addEventListener('click', function(event) {
          event.preventDefault();

    const first = document.querySelectorAll('#first');
    const last = document.querySelectorAll('#last');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelectorAll('#password');

    for (let i = 0; i < first.length; i++) {
        const input = first[i];
        const inputWrapper = input.parentNode;
        const firstErrorMessage = document.querySelector('.error-message');

        if (input.value.trim() === '') {
          inputWrapper.classList.add('error');
          firstErrorMessage.style.display = 'block';
        } else {
          inputWrapper.classList.remove('error');
          firstErrorMessage.style.display = 'none';
        }
    }

    for (let i = 0; i < last.length; i++) {
        const input = last[i];
        const inputWrapper = input.parentNode;
        const lastErrorMessage = document.querySelector('.error-message');
        
        if (input.value.trim() === '') {
            inputWrapper.classList.add('error');
            lastErrorMessage.style.display = 'block';
        } else {
            inputWrapper.classList.remove('error');
            lastErrorMessage.style.display = 'none';
        }
    }
    
        const emailInputWrapper = emailInput.parentNode;
        const emailErrorMessage = document.querySelector('.error-message');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            emailInputWrapper.classList.add('error');
            emailErrorMessage.style.display = 'block';
        } else {
            emailInputWrapper.classList.remove('error');
            emailErrorMessage.style.display = 'none';
        }
      
    for (let i = 0; i < passwordInput.length; i++) {
        const input = passwordInput[i];
        const inputWrapper = input.parentNode;
        const ErrorMessage = document.querySelector('.error-message');

        if (input.value.trim() === '') {
            inputWrapper.classList.add('error');
            ErrorMessage.style.display = 'block';
        } else {
            inputWrapper.classList.remove('error');
            ErrorMessage.style.display = 'none';
        }
    }
    // form.reset();
    });
})