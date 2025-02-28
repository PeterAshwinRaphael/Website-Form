document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');

    // Hamburger menu code
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
    });
}); 