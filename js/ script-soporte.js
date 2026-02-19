// Función para abrir/cerrar las tarjetas al hacer clic en el header
function toggleCard(headerElement) {
    const card = headerElement.closest('.card');
    if (card) {
        card.classList.toggle('open');
    }
}

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

// Actualizar año en el footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.innerHTML = `© ${new Date().getFullYear()} Víctor Rafael Manzano Aguiar. Todos los derechos reservados.`;
    }
});

// Abrir primera tarjeta por defecto (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const primeraCard = document.querySelector('.card');
    if (primeraCard) {
        primeraCard.classList.add('open');
    }
});