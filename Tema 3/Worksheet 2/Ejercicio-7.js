//7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
//dimensión:
// a) Establecer los 10 elementos del array a cero.

array = [1,2,3,4,5,6,7,8,9,10];

function cero(array){
    for (i = 0; i <= 10; i++){
        array[i]=0; 
    }
    return array; 
};
document.write(cero(array));

document.write('<br>');

//b) Añadir 1 a cada uno de los elementos del array.

function uno(array){
    for (i = 0; i <= 10; i++){
        array[i]+=1;
    }
    return array; 
};
document.write(uno(array));

document.write('<br>');

//c) Muestra los valores del array separados por espacios.

function espacios(array){
    for (let numero of array){
        document.write(numero + ' ');
    }
};
espacios(array);























/*
vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function resetear(v)
{
    v.forEach((valor, indice) => {
        v[indice] = 0;
    });
}

function masuno(v)
{
    v.forEach((valor, indice) => {
        v[indice] += 1;
    });
}

function espacios(v)
{
    v.forEach((valor, indice) =>{
        document.write(v[indice] + '<br>');
    });
}


console.log(resetear(vector));
masuno(vector);
console.log(vector);
console.log(espacios(vector));*/