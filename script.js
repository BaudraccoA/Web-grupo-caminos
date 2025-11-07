// Espera a que todo el contenido HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // ===== CÓDIGO DEL MENÚ HAMBURGUESA =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Función para mostrar u ocultar el menú
    const toggleMenu = () => {
        if (!navLinks) return; // Seguridad por si no existe
        navLinks.classList.toggle('active'); // Añade o quita la clase 'active'
        
        // Opcional: Cambia el icono de barras a una 'X'
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    };

    // Añadimos un 'escuchador de clic' al botón de hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Opcional: Cierra el menú si se hace clic en un enlace (para móviles)
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // ===== CÓDIGO DEL CARRUSEL (SWIPER) =====
    // Verifica si el elemento .galeria-carrusel existe antes de iniciarlo
    if (document.querySelector('.galeria-carrusel')) {
        
        const swiper = new Swiper('.galeria-carrusel', {
            // EFECTO: 'slide' (deslizar) o 'fade' (difuminar). 'Fade' es muy elegante.
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            
            // AUTO-PLAY: Pasa las fotos automáticamente
            autoplay: {
                delay: 4000, // 4 segundos por foto
                disableOnInteraction: false, // Sigue funcionando después de que el usuario lo toque
            },

            // LOOP: Para que el carrusel sea infinito
            loop: true,
            
            // NAVEGACIÓN (Flechas)
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // PAGINACIÓN (Puntos)
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // Permite hacer clic en los puntos
            },
        });
    }

}); // Fin del DOMContentLoaded


    