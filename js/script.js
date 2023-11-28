// Agrega tu código JavaScript aquí si es necesario
// Puedes agregar funciones para el desplazamiento suave al hacer clic en los enlaces de navegación.
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
