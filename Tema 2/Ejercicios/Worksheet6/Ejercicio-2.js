//c) Mostrar numero imágenes del documento:
document.write("<br>Número de imágenes: " + document.images.length + "<br>");

//d) Mostrar id de la primera imagen:
var x = document.images.item("0").id;
document.write("ID de la imagen 1: " + x + "<br>");

//e) Muestra el número de enlaces del documento:
document.write("Numero de enlaces: " + document.links.length);

//f) Cambia el título del documento:
document.title = "Este título es nuevo";