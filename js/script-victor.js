// Menú hamburguesa para móviles
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const dropdownMenu = document.getElementById('dropdownMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Control del menú desplegable en móviles
if (dropdownMenu) {
    dropdownMenu.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownMenu.classList.toggle('active');
        }
    });
}

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('active');
            }
        }
    });
});

// Suavizar el desplazamiento a las secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Actualizar año en el footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.innerHTML = `© ${new Date().getFullYear()} Víctor Rafael Manzano Aguiar. Todos los derechos reservados.`;
    }
});