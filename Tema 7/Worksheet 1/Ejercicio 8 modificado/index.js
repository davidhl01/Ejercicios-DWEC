$(document).ready(function () {
    //Cambiar tamaño fuente
    $('div>p').eq(0).css('font-size', '15px');
    $('div>p').eq(1).css('font-size', '10px');
    $('div>p').eq(2).css('font-size', '7px');

    // Al pulsar el título se oculta o muestra el texto de la noticia
    $('div>h1').on("click", oculta);

    function oculta() {
        // $(this).siblings(0).toggle("slow") // Toggle oculta o muestra (también admite cifras(2 seg = 2000))

        var objeto = $(this); // Hay que crear esta variable porque this se pierde en este caso

        $('p').click(function () {
            var objeto = $(this);
            $.get('texto.txt', function (r) {
                console.log(r);
                objeto.html(r);
            });
        })

    };

    /* Al colocar el ratón sobre el texto de 
    la noticia debe cambiar el color de fondo de esta */
    $('div>p').on("mouseover", colorear);
    $('div>p').on("mouseout", blanco);

    function colorear() {
        $(this).css('background-color', 'red');
    }

    function blanco() {
        $(this).css('background-color', 'white');
    }
});
