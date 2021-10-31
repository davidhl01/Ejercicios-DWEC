var compra = ["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];
document.write(compra);
document.write('<br>');

/*Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)*/
var borracompra = compra.splice(1,1);
document.write(borracompra);
document.write('<br>');

/*Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)*/
var añadir = compra.splice(3,0,"Naranjas","Sandía");
document.write(añadir);
document.write('<br>');

/*Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)*/
var quitar = compra.splice(1,1,"Cerezas","Nísperos");
document.write(quitar);