/*1. - crea un script que pida al usuario su nombre y apellidos.Si el nombre es“ Ricardo”, debe mostrar en
pantalla los apellidos;
si el nombre no es“ Ricardo”, debe escribir en el documento HTML los apellidos.*/

/*var nombre = prompt("Dime tu nombre: ");

var apellidos = prompt("Dime tus apellidos: ");

if (nombre == "Ricardo") {
    alert(apellidos)
} else document.write(apellidos);*/

/*2. - crea un script que reciba la edad de un usuario y determine si puede jubilarse o no(la jubilación se alcanza con 67 años).*/

/*var edad = prompt("Dime tu edad: ");

if (edad >= 67) {
    alert("Puedes jubilarte.")
} else alert("No puedes jubilarte.")*/

/*3. - Crea un script que pregunte la edad, y determine si debes estar en el jardín de infancia(menores de 5 años), en primaria(entre 6 y 11), en la ESO(entre 12 y 16),
    en Bachillerato o Ciclos(entre 17 y 21) o en la Universidad(más de 21).*/

/*var edad = prompt("Dime tu edad: ");

if (edad <= 5) {
    alert("Debes estar en el jardín de infancia.")
} else if (edad >= 6 && edad <= 11) {
    alert("Debes estar en primaria.")
} else if (edad >= 12 && edad <= 16) {
    alert("Debes estar en secundaria.")
} else if (edad >= 17 && edad <= 21) {
    alert("Debes estar en Bachillerato o Ciclos.")
} else alert("Debes estar en Bachillerato o Ciclos.")*/

/*4. - Crea un script que pregunte al usuario el número de hermanos que tiene y una cantidad.En el caso
de que el usuario tenga más de tres hermanos, se mostrará la cantidad con un 15 % de descuento.Si el
usuario tiene menos de tres hermanos, se mostrará la cantidad con un 5 % de descuento.Si no tiene
hermanos se mostrará la cantidad sin descuento.*/

/*var hermanos = parseInt(prompt("¿Cuántos hermanos tienes?: "));
var cantidad = parseInt(prompt("Escriba una cantidad: "));

if (hermanos >= 3) {
    alert("Descuento: " + (cantidad - (cantidad * 0.15)));
} else if (hermanos < 3) {
    alert("Descuento: " + (cantidad - (cantidad * 0.05)));
} else alert("Cantidad sin descuento: " + cantidad);*/

/*5. - Crea un script que recoja la nota de dos exámenes y dos trabajos y determine si la media es superior
a 5 para aprobar la asignatura(75 % exámenes y 25 % trabajos) y 4.5 en todos ellos.*/

var examen1 = prompt("Dime la nota de tu primer examen: ");

var examen2 = prompt("Dime la nota de tu segundo examen: ");

var trabajo1 = prompt("Dime la nota de tu primer trabajo: ");

var trabajo2 = prompt("Dime la nota de tu segundo trabajo: ");