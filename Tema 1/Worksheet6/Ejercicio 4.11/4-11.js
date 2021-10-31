/*Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura(en pixels) de sus celdas.Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.*/

columnas = prompt("Introduce el número de columnas: ");
altura = prompt("Introduce la altura en pixeles: ");
anchura = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor = "white" height = ' + altura + '>');

for (let i = 1; i <= columnas; i++) {
    document.write('<td width=' + anchura + '>&nbsp;</td>');
}

document.write("</tr>");
document.write("</table>");