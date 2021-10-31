/*2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función“ lanzamiento” que devuelva un nº aleatorio entre 1 y 6.*/

function lanzamiento(){
    return Math.round(Math.random()*(6-1)+1);
};

document.write("El número del lanzamiento es: " + lanzamiento());