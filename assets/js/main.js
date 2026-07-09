// ============================================
// MENÚ HAMBURGUESA - Toggle para móviles
// ============================================

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}

// ============================================
// EFECTO DE SCROLL EN EL HEADER
// ============================================

const header = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// CIERRE DEL MENÚ AL HACER CLIC EN UN ENLACE
// ============================================

document.querySelectorAll('.main-nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
        }
    });
});
