/*setTimeout(function() { alert("Ya han pasado 60 segundos"); }, 3000);*/

setTimeout(muestraSeg, 1000);
var segundos = 10;

function muestraSeg() {
    document.write(segundos--);
    document.write('<br>');
    if (segundos >= 0) {
        setTimeout(muestraSeg, 1000);
    };
};