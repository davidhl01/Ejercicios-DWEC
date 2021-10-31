/*Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado(jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar.*/

var numero_adivinar = prompt("Introduce el número a adivinar: ");
num = prompt("Introduce un número: ");

while (num != numero_adivinar) {
    if (num < numero_adivinar) {
        alert("El número es mayor.");
        num = prompt("Introduce un número: ");
    } else if (num > numero_adivinar) {
        alert("El número es menor.");
        num = prompt("Introduce un número: ");
    }
}
alert("Lo has adivinado.");