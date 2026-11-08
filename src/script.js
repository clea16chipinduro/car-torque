document.addEventListener('DOMContentLoaded', () => {
    // Splash screen dismissal
    const splashScreen = document.getElementById('intro-splash');
    const enterBtn = document.getElementById('enter-site-btn');

    if (enterBtn && splashScreen) {
        enterBtn.addEventListener('click', () => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500);
        });
    }

    // Booking form integration with WhatsApp
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            const whatsappNumber = "27792646699";
            const text = `Hello Car Torque,%0A%0AMy Name: ${name}%0APhone: ${phone}%0ARequested Service: ${service}%0ADetails: ${message}`;
            
            window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
        });
    }

    // Smooth scrolling for navigation anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});