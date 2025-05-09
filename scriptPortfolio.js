document.getElementById('contactForm').addEventListener('submit', function(event) {
    const telefono = document.querySelector('input[name="telefono"]').value;
    if (telefono && !/^\d{7,15}$/.test(telefono)) {
        alert('Por favor, ingresa un número de teléfono válido');
        event.preventDefault();
        return false;
    }
});


// Esperar a que la página esté completamente cargada
document.addEventListener('DOMContentLoaded', function() {
    // Función para animar las barras cuando están visibles
    function animateSkillsOnScroll() {
        const skillsSection = document.querySelector('.skills-section');
        const skillBars = document.querySelectorAll('.skill-progress');

        // Comprobar si la sección de habilidades está visible
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);

        if (isVisible) {
            // Animar cada barra de progreso
            skillBars.forEach(function(bar) {
                const finalWidth = bar.textContent;
                // Aplicar el ancho final con una ligera demora para cada barra
                setTimeout(function() {
                    bar.style.width = finalWidth;
                }, 200);
            });

            // Remover el evento scroll una vez que se hayan animado las barras
            window.removeEventListener('scroll', animateSkillsOnScroll);
        }
    }

    // Iniciar animación cuando la página carga (por si la sección ya está visible)
    animateSkillsOnScroll();

    // Añadir evento de scroll para animar cuando se haga scroll
    window.addEventListener('scroll', animateSkillsOnScroll);
});