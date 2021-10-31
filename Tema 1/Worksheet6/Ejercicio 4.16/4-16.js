/*Adaptar el ejercicio 4.15.al bucle DO..WHILE*/

var numero_adivinar = prompt("Introduce el número a adivinar: ");
num = prompt("Introduce un número: ");

do {
    if (num < numero_adivinar) {
        alert("El número es mayor.");
        num = prompt("Introduce un número: ");
    } else if (num > numero_adivinar) {
        alert("El número es menor.");
        num = prompt("Introduce un número: ");
    }

} while (num != numero_adivinar);

alert("Lo has adivinado.");