// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ¡Fecha de cumpleaños de Ruby!
    const eventDate = new Date('2025-07-12T19:00:00'); // Asumiendo que la fiesta será a las 7 PM

    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            document.getElementById('timer').textContent = '¡El hechizo para Ruby ha comenzado!';
        }
    }

    setInterval(updateCountdown, 1000);

    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});