/*Write a function called addOnlyNums that can take in any number 
of arguments(including numbers or strings), 
and returns the sum of only the numbers.*/

function addOnlyNums(...array) {
    let resultado = 0;
    for (valor of array) {
        if (typeof valor == typeof resultado) {
            resultado += valor
        };
    };
    return resultado;
};

document.write(addOnlyNums(1, 'cat', 3, 4));