/*Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas usando
dos for anidados.
El programa pedirá solamente el ancho de la celda que será igual que el
alto.*/

var ancho = prompt("Dime el ancho del tablero: ");
var columnas = 8;

for (let i = 1; i <= columnas; i++) {
    document.write('<td bgcolor = "white" width="' + ancho + '">&nbsp;</td>');
    for (let j = 1; j <= columnas; j++) {
        document.write('<td bgcolor = "black" width="' + ancho + '">&nbsp;</td>');
    }
}