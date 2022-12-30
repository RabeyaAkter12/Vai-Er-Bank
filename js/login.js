// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3: get password
    // step-3.a: set id on the html element
    // step-3.b: get the element 
    // step-3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Danger: Do not verify email password on the client side
    // step-4: verify email and password and check whether valid user or not
    
    if(email === 'rabeyaakter7744@gmail.com' && password === 'rabeya2022'){
        window.location.href = 'Bank.html';
    }
    else{
        alert('Tui password vule gasos!!! Toke ami tejjo Vai gosona korlam');
    }
})