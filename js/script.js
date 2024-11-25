/* ====================== Toggle Icon Navbar =========================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Verifica que los elementos existan antes de agregarles eventos
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x'); // Alterna la clase 'bx-x'
        navbar.classList.toggle('active'); // Alterna la clase 'active'
    });
} else {
    console.error('menuIcon o navbar no se encontraron en el DOM');
}


/* ====================== scroll sections active link =========================== */

// Aqui la funcionalidad es de que al desplazarte por cada seccion se va generando el resltado de cada seccion en los enlaces o sea el header(Home, About, Services...)

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

     //sticky navbar
     let header = document.querySelector('header');

     // Activa la clase 'sticky' en el header si el desplazamiento es mayor a 100px
     if (header) {
         header.classList.toggle('sticky', window.scrollY > 100);
     } else {
         console.error('No se encontró el elemento <header> en el DOM');
     }

     // Secciones activas en el menú
     sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active')); // Iterar para eliminar la clase
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            } else {
                console.error(`No se encontró un enlace para la sección con id: ${id}`);
            }
        }
    });
};

    /* ====================== remove toggle icon and navbar when click navbar link (scroll) =========================== */
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuIcon && navbar) {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });
    });
    
    /* ====================== ScrollReveal =========================== */
    if (typeof ScrollReveal !== 'undefined') {
         // Configuración de ScrollReveal si está disponible
        ScrollReveal({
            // reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });
    
        //Animaciones, contenido, encabezados, imagenes, titulos y textos.
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    
    } else {
        // Manejo de error si ScrollReveal no está disponible
        console.error('ScrollReveal no está definido. Asegúrate de incluir su librería.');
    }

     /* ====================== typed js =========================== */
     const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Content creator', 'Photographer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
     });