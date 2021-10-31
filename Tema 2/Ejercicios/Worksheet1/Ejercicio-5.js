var fechahoy = new Date();
var horas = fechahoy.getHours();
var minutos = fechahoy.getMinutes();
var segundos = fechahoy.getSeconds();

function reload() {
    location.reload()
};

setTimeout(function reloj() {
    if (horas < 10) {
        horas = "0" + horas;
    } else if (minutos < 10) {
        minutos = "0" + minutos;
    } else if (segundos < 10) {
        segundos = "0" + segundos;
    }
    document.write('<strong>Hora: </strong>' + horas + ' ', '<strong>Minutos: </strong>' + minutos + ' ', '<strong>Segundos: </strong>' + segundos);
    setTimeout(reload, 1000);
});