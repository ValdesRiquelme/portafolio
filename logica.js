// Código JavaScript personalizado

// Obtener el botón o enlace para activar/desactivar el modo oscuro
var toggleDarkModeButton = document.getElementById('toggleDarkMode');

// Agregar un evento de clic al botón o enlace
toggleDarkModeButton.addEventListener('click', function() {
  // Obtener el elemento body
  var body = document.body;

  // Alternar la clase 'dark-mode' en el body para cambiar los estilos a modo oscuro
  body.classList.toggle('dark-mode');
});
