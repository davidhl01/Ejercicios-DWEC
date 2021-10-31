/*Adapta el ejercicio 4.11 utilizando un bucle
while en vez de un bucle
for.*/

columnas = prompt("Introduce un número de columnas: ");
altura = prompt("Introduce la altura en pixeles: ");
anchura = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor = "white" height = "' + altura + '">');

var contador = columnas;
do {
    document.write('<td width="' + anchura + '">&nbsp;</td>');
    contador -= 1;
} while (contador != 0);

/*
for (let i = 1; i <= columnas; i++) {
    document.write('<td width="' + anchura + '">&nbsp;</td>');
}
*/

document.write("</tr>");
document.write("</table>");