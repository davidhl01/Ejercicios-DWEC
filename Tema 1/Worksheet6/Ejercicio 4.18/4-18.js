/*Hacer un programa que pida por teclado cuatro valores: el número de
columnas y filas de una tabla y, la altura y anchura(en pixels) de sus
celdas.Una vez tecleados estos valores, el programa pintará en la página
web una tabla HTML del nº de filas por el nº de columnas tecleadas.*/

columnas = prompt("Introduce un número de columnas: ");
filas = prompt("Introduce el número de filas: ");
altura = prompt("Introduce la altura en pixeles: ");
anchura = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');

for (let i = 1; i <= filas; i++) {
    document.write('<tr bgcolor = "white" width="' + anchura + '">&nbsp;</td>');
    for (let j = 1; j <= columnas; j++) {
        document.write('<td width="' + anchura + '">&nbsp;</td>');
    }
}

document.write("</tr>");
document.write("</table>");