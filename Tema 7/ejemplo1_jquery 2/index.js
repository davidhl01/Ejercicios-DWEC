$(document).ready(function () {
    $('p').on({ // Así podemos ejecutar varios eventos en una sola llamada
        click: function () {
            $(this).hide("slow"); // slow es una opción propia de hide, que le añade una animación
        }, // Separamos cada function con una coma(,)
        mouseenter: function () {
            console.log($(this).html()); e// This ejecuta el código en el lanzador del evento
        }
    })
});