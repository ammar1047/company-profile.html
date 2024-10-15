document.addEventListener('DOMContentLoaded', function () {
    // Simulate user login state
    const isLoggedIn = false; // Change this to true when user is logged in
    const username = "JohnDoe"; // Example username

    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const userNameBtn = document.getElementById('user-name');
    const dashboardLink = document.getElementById('dashboard-link');
    const returnScheduleLink = document.getElementById('return-schedule-link');

    // Check if the user is logged in
    if (isLoggedIn) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        userNameBtn.style.display = 'block';
        userNameBtn.textContent = username;

        // Show extra menu options
        dashboardLink.classList.remove('d-none');
        returnScheduleLink.classList.remove('d-none');
    } else {
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        userNameBtn.style.display = 'none';

        // Hide extra menu options
        dashboardLink.classList.add('d-none');
        returnScheduleLink.classList.add('d-none');
    }
});
