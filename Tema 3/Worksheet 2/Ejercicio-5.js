/*5. Crear una función llamada paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array.*/

function paresImpares(){
    todos = [];
    pares = [];
    impares = [];

    for (i = 0; i <= 100; i++){
        numero = Math.floor(Math.random()*(1000-1))+1;
        if(numero % 2 == 0){
            pares.push(numero);
        }
        else {
            impares.push(numero);
        }
    }
    todos.push('Números pares: ' + pares + '<br>');

    todos.push('Números impares: ' + impares);

    return todos;
};

document.write(paresImpares());