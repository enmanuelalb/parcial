document.addEventListener('DOMContentLoaded', function() {
    // Crear botón "Volver al inicio"
    var topButton = document.createElement('button');
    topButton.innerHTML = '⬆️ Volver al inicio';
    topButton.id = 'topButton';
    document.body.appendChild(topButton);

    // Mostrar/ocultar botón basado en el desplazamiento
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    };

    // Desplazarse hacia arriba cuando se hace clic en el botón
    topButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
