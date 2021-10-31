/*Escribir un programa que muestre la frase“ Cabecera h” seguido del número.
Las frases deben estar formateadas con las etiquetas adecuadas.El
resultado debe ser el siguiente:*/
var bucle = "<h1>PRÁCTICA DE BUCLE FOR</h1>"
document.write(bucle)

for (let i = 1; i < 7; i++) {
    document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
}