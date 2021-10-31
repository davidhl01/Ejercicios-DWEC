//1. - crea un script que determine si un número introducido por el usuario es par.
/*var numero = prompt("Dime un número: ")

if (numero % 2 == 0) {
    alert("El número es par.")
}

if (numero % 2 != 0) {
    alert("El número es impar.")
}*/

//2. - crea un script que reciba la edad de un usuario y determine si es mayor de edad.
/*var edad = prompt("Dime tu edad: ")

if (edad >= 18) {
    alert("Eres mayor de edad.")
}

if (edad <= 18) {
    alert("Eres menor de edad.")
}
*/

//3. - crea un script que reciba la edad de un usuario, y su localidad de nacimiento y muestre en pantalla“ Enhorabuena” a los usuarios de más de 25 años de Madrid.

/*var localidad = prompt("Dime tu localidad de nacimiento: ")

if (edad >= 25 && localidad == 'Madrid') {
    alert("Enhorabuena")
}
*/

/*4. - crea un script que pida un número al usuario, y si ese número es superior a 100 le aplique un
descuento del 15 % , mostrando el nuevo número en pantalla.*/

/*var numero = prompt("Dime un número: ");

if (numero > 100) {
    numero = numero * 0.85
    alert(numero)
}
*/

/*5. - crea un script que pregunte al usuario por su nombre, y conteste“ Bienvenido” o“ Bienvenida” según
si el nombre introducido es de hombre o de mujer(nota: realízalo sólo para los nombres: Pablo, Ana,
Eduardo y Clara).*/

/*var nombre = prompt("Dime tu nombre: ");

if (nombre == 'Ana' || nombre == 'Clara') {
    alert("Bienvenida")
}

if (nombre == 'Pablo' || nombre == 'Eduardo') {
    alert("Bienvenido")
}
*/

/*6. - crea un script que pida a un usuario dónde vive;
si vive en Madrid y tiene entre 18 y 30 años, el script
debe mostrar en pantalla que el usuario puede acceder al carnet de empresarios emprendedores.*/

var vivienda = prompt("¿Donde vives?: ");
var edad = prompt("¿Qué edad tienes?: ")

if (vivienda == 'Madrid' && edad >= 18 && edad <= 30) {
    alert("Puedes acceder al carnet de empresarios emprendedores.")
}