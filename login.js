document.getElementById('btn-sumbit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email === 'romana@gmail.com' && password === 'lasta da vasta'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})