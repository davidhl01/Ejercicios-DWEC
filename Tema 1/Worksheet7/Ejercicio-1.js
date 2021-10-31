/*Write a function that can take in any number of arguments, and
returns the sum of all of the arguments.*/

function sumaValores(...miarray) {
    let resultado = 0;
    for (num of miarray) {
        resultado += num;
    };
    return resultado;
};
document.write(sumaValores(1, 2, 3, 4, 5, 6, 7, 8));