/*1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.*/

var num1 = parseInt(prompt("Dime en número 1: "));
var num2 = parseInt(prompt("Dime en número 2: "));
var num3 = parseInt(prompt("Dime en número 3: "));
var num4 = parseInt(prompt("Dime en número 4: "));

var array = [num1, num2, num3, num4];

function maximo(array1) {
    var resultado = Math.max(...array1);
    return "El número máximo es: " + resultado;
};

document.write(maximo(array));