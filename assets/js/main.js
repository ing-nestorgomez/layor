// ============================================
// OCULTAR BARRA AMARILLA AL HACER SCROLL
// ============================================

const yellowBar = document.getElementById('yellowBar');
let lastScrollY = window.scrollY;
let scrollTimeout;

function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Si el scroll es mayor a 50px, oculta la barra amarilla
    if (currentScrollY > 50) {
        yellowBar.classList.add('hidden');
    } else {
        yellowBar.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
}

// Usamos throttle para mejorar el rendimiento
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// ============================================
// MENÚ HAMBURGUESA (Para móviles)
// ============================================

// Si necesitas menú hamburguesa en el futuro, puedes agregarlo aquí
// Por ahora, el menú se muestra directamente en la barra amarilla
