/*Hacer un programa en JavaScript que usando
dos bucles anidados
for imprima por pantalla
todas las tablas de multiplicar.
El resultado debería ser algo parecido a:*/

for (let i = 0; i <= 10; i++) {
    document.write("<h1>Tabla del " + i + "</h1>");
    for (let j = 0; j <= 10; j++) {
        document.write(i + " x " + j + " = " + i * j + "<br>");
    }
}