/*Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco.*/

columnas = prompt("Introduce un número de columnas: ");
altura = prompt("Introduce la altura en pixeles: ");
anchura = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor = "white" height = "' + altura + '">');
/*document.write('<tr bgcolor = "white" height = "${altura} #Me ahorro las concatenaciones">');*/

for (let i = 1; i <= columnas; i++) {
    if (i % 2 == 0) {
        document.write('<td bgcolor = "white" width="' + anchura + '">&nbsp;</td>');
    } else {
        document.write('<td bgcolor = "black" width="' + anchura + '">&nbsp;</td>');
    }
}

document.write("</tr>");
document.write("</table>");