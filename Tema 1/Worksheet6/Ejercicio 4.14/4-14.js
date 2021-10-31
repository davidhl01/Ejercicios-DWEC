/*Adapta el ejercicio 4.12 utilizando un bucle
while en vez de un bucle
for.*/

columnas = prompt("Introduce un número de columnas: ");
altura = prompt("Introduce la altura en pixeles: ");
anchura = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor = "white" height = "' + altura + '">');

var contador = columnas;
do {
    if (contador % 2 == 0) {
        document.write('<td bgcolor = "white" width="' + anchura + '">&nbsp;</td>');
    } else {
        document.write('<td bgcolor = "black" width="' + anchura + '">&nbsp;</td>');
    }

    contador -= 1;
} while (contador != 0);


document.write("</tr>");
document.write("</table>");