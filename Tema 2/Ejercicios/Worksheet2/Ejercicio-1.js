// Número aleatorio entre 0 y 1.
document.write(Math.random());
document.write('<br>');

// Igual pero entre 100 y 200.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
document.write(getRandomInt(100, 200));

/* Pide dos valores al usuario y genera un nº aleatorio entre esos 
dos valores.*/
document.write('<br>' + getRandomInt((prompt('Primer numero: ')), (prompt('Segundo numero: '))));