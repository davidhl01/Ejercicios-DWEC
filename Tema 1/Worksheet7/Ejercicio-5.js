/*Write afunction called sumEveryOther that takes in any amount of arguments,
and returns the sum of every other argument.*/

/*var lista1 = [5, 6, 3, 4, 1];
var lista2 = [10, 2, 11];

function sumEveryOther(numeros) {
    for (let num of numeros) {
        return (numeros[0] + numeros[3]);
    }
}
document.write(sumEveryOther(lista1));*/

/*sumEveryOther(5, 6, 3, 4, 1); //9*/
/*sumEveryOther(10, 2, 11); //21*/

function sumEveryOther(cadena) {
    let total = 0;
    for (num in cadena) {
        if (num % 2 === 0) {
            total += cadena[num];
        }
    }
    return total;
}
var lista1 = [5, 6, 3, 4, 1];
var lista2 = [10, 2, 11];

document.write(sumEveryOther(lista1));
document.write('<br>');
document.write(sumEveryOther(lista2));

/* === significa que es igual el valor y el tipo.*/