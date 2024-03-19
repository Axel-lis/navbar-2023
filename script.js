$(document).ready(function () {
  // Oculta el menú al principio en versiones móviles
  $('.navbar-links').hide();

  // Al hacer clic en el logo del navbar...
  $('#navbar-logo').click(function() {
    // Muestra u oculta el menú según su estado actual
    $('.navbar-links').slideToggle();
  });
});
