/*Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):*/

//- find largest number:

let array1 = [5, 2, 67, 37, 85, 19, 10, 9];

largestnumber = Math.max.apply(null,array1);

document.write("Número más largo: " + largestnumber + '<br> ');

//- find longest string:

var array2 = ["hola","adios","buenas tardes","que tal"]; 

var longest = array2.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];

document.write("Palabra más larga: " + longest + '<br> ');

//- find even numbers

// Encontrar los números pares
pares = []
array1.forEach(valor => {
    if (valor % 2 == 0) {
        pares.push(valor);
    }
});
document.write("Lista de pares: " + pares + "<br>");

// Encontrar los números impares

impares = []
array1.forEach(valor => {
    if (valor % 2 != 0) {
        impares.push(valor);
    }
});
document.write("Lista de impares: " + impares + "<br>");

//- find words that contain 'is'

palabras = ["Paris","parchis","hola","adios","buenas","is"];

palabrascon = [];

palabras.forEach(palabra => {
    if (palabra.includes("is")) {
        palabrascon.push(palabra);
    }
});
document.write(palabrascon);
document.write("<br>");

//- assert all numbers are divisible by three
divisibles = []
array1.forEach(valor => {
    if (valor % 3 == 0) {
        divisibles.push(valor);
    }
});
document.write("Lista de divisibles entre 3: " + divisibles + "<br>");

//- zip two arrays together
var array3 = array1.concat(array2);
document.write("Concatenación: " + array3);

document.write("<br>");

//- sort joined array from smallest to largest
var ordenar = palabras.sort(
    function (a, b) {
        return a.length - b.length;
    }
);
document.write(ordenar);
document.write("<br>");

//- remove the first word in the array
palabras.shift();
document.write(palabras);
document.write("<br>");

//- place a new word at the start of the array
palabras.unshift("Granada");
document.write(palabras);
document.write("<br>");

//- replace some elements.*/
palabras.splice(0,1,"Madrid");
document.write(palabras);