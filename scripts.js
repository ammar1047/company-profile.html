import Flickity from 'flickity';

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const carousel = document.getElementById('hero-carousel');
    const flkty = new Flickity(carousel, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 3000,
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

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