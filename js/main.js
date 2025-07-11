// Espera a que todo el contenido del HTML se haya cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNCIÓN PRINCIPAL DE INICIALIZACIÓN ---
    // Esta función llama a todas las demás. Es el punto de partida.
    function init() {
        initMobileMenu();
        initScrollAnimations();
        
        // Aquí llamaremos a futuras funciones
        // initMusicPlayer(); 
        // initVideoGallery();
    }

    // --- 1. LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA) ---
    function initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Cuando se hace click en la hamburguesa
        hamburger.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú y animar el icono
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cierra el menú cuando se hace click en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- 2. LÓGICA PARA ANIMACIONES AL HACER SCROLL (APARECER ELEMENTOS) ---
    function initScrollAnimations() {
        const sections = document.querySelectorAll('.content-section');

        // Intersection Observer es la forma moderna y eficiente de detectar si un elemento está en pantalla.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Si la sección está en la pantalla (intersecting)
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1 // Se activa cuando el 10% del elemento es visible
        });

        // Le decimos al observador qué elementos debe "vigilar"
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // --- 3. FUTURA LÓGICA PARA EL REPRODUCTOR DE MÚSICA ---
    function initMusicPlayer() {
        // En el futuro, aquí pondremos el código para cargar el reproductor de Bandcamp/Spotify
        // Por ejemplo, usando la API de Spotify o un iframe de Bandcamp.
        console.log("Reproductor de música listo para ser implementado.");
    }

    // --- 4. FUTURA LÓGICA PARA LA GALERÍA DE VIDEOS ---
    function initVideoGallery() {
        // Aquí pondremos el código para cargar los videos de YouTube.
        console.log("Galería de videos lista para ser implementada.");
    }


    // ¡Llamamos a la función principal para que todo empiece a funcionar!
    init();

});