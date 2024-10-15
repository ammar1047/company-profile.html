document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email !== '' && password !== '') {

            alert('Login berhasil!');
            window.location.href = 'index.html';
        } else {
            alert('Silakan isi email dan password!');
        }
    });
});