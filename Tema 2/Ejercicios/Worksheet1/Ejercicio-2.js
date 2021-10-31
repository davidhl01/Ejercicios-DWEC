var fechaHoy = new Date();
document.write(fechaHoy + '<br>');

var fecha85 = new Date();
fecha85.setDate(fecha85.getDate() + 85);
document.write(fecha85 + '<br>');

var fecha187 = new Date();
fecha187.setDate(fecha187.getDate() - 187);
document.write(fecha187 + '<br>');

fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write(fecha85 + '<br>');

fecha187.getDate(fecha187.getDate() - 1);
document.write(fecha187 + '<br>');

var fechaResto = (fecha85 - fecha187);
document.write('Fecha resto: ' + fechaResto);