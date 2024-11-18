$(document).ready(function () {
    // Modo Claro
    $('#modoClaro').click(function () {
        $('body').removeClass('modo-oscuro').addClass('modo-claro');
        $('nav').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-secondary');
        $('footer').removeClass('bg-dark text-white').addClass('bg-secondary text-dark');
    });

    // Modo Oscuro
    $('#modoOscuro').click(function () {
        $('body').removeClass('modo-claro').addClass('modo-oscuro');
        $('nav').removeClass('navbar-light bg-secondary').addClass('navbar-dark bg-dark');
        $('footer').removeClass('bg-secondary text-dark').addClass('bg-dark text-white');
    });
});
