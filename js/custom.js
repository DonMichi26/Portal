// Cuando la ventana termina de cargar,
// oculta el preloader con un efecto de desvanecimiento de 1 segundo.
$(window).load(function(){
    // Oculta el preloader con una animación de 1 segundo
    $('.preloader').fadeOut(1000);   
});

$(document).ready(function() {

  // Al hacer clic en un enlace del menú, se oculta el menú colapsable
  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // Cambia la clase de la barra de navegación cuando se hace scroll para aplicar estilos diferentes
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


function initParallax() {
  // Inicializa el efecto parallax en cada sección
  $('#home').parallax("100%", 0.1);
  $('#about').parallax("100%", 0.3);
  $('#service').parallax("100%", 0.2);
  $('#experience').parallax("100%", 0.3);
  $('#education').parallax("100%", 0.1);
  $('#quotes').parallax("100%", 0.3);
  $('#contact').parallax("100%", 0.1);
  $('footer').parallax("100%", 0.2);

}

initParallax();
  
  $(function() {
      // Animación de scroll suave al hacer clic en enlaces
      $('.custom-navbar a, #home a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
          event.preventDefault();
      });
  });


  // Inicializa las animaciones WOW.js
new WOW({ mobile: false }).init();


});

