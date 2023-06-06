$(document).ready(function() {
    // const form = $('#form');
    const formButton = $('.form-button');
  
    formButton.on('click', function(event) {
      event.preventDefault();
  
    const first = $('#first');
    const last = $('#last');
    const emailInput = $('#email');
    const passwordInput = $('#password');
  
    first.each(function() {
        const input = $(this);
        const inputWrapper = input.parent();
        const firstErrorMessage = $('.error-message');
  
        if (input.val().trim() === '') {
          inputWrapper.addClass('error');
          firstErrorMessage.css('display', 'block');
        } else {
          inputWrapper.removeClass('error');
          firstErrorMessage.css('display', 'none');
        }
    });
  
    last.each(function() {
        const input = $(this);
        const inputWrapper = input.parent();
        const lastErrorMessage = $('.error-message');
  
        if (input.val().trim() === '') {
          inputWrapper.addClass('error');
          lastErrorMessage.css('display', 'block');
        } else {
          inputWrapper.removeClass('error');
          lastErrorMessage.css('display', 'none');
        }
    });
  
    const emailInputWrapper = emailInput.parent();
    const emailErrorMessage = $('.error-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(emailInput.val())) {
        emailInputWrapper.addClass('error');
        emailErrorMessage.css('display', 'block');
    } else {
        emailInputWrapper.removeClass('error');
        emailErrorMessage.css('display', 'none');
    }
  
    passwordInput.each(function() {
        const input = $(this);
        const inputWrapper = input.parent();
        const ErrorMessage = $('.error-message');
  
        if (input.val().trim() === '') {
          inputWrapper.addClass('error');
          ErrorMessage.css('display', 'block');
        } else {
          inputWrapper.removeClass('error');
          ErrorMessage.css('display', 'none');
        }
    });
      // form.reset();
    });
});  