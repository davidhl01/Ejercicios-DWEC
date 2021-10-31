/*Crear un array con 10 valores con campos 
y ordena creciente y decreciente*/

/*var notas = [1,2,3,4,8,6,7,10,9,5]

document.write(notas.sort((a,b)=>a-b));
document.write('<br>');
document.write(notas.sort((a,b)=>b-a));*/


//crear objetos poquemon con : nombre, tipo y ordenarlos de forma creciente y decreciente. 
//En caso de que los valores sean iguales comparar con otros datos para ordenar.

let pokemon=[
    {nombre:"Picachu", tipo:"electrico"},
    {nombre:"Squirtle", tipo:"agua"},
    {nombre:"Steelix", tipo:"acero"},
    {nombre:"Caterpie",tipo:"bicho"},
    {nombre:"Dratini",tipo:"dragón"},
    {nombre:"Mawile", tipo:"acero"}
]

//decreciente
comparacion = pokemon.sort((a,b)=>{
    if (a.tipo<b.tipo)
        return 1;
    else if(b.tipo<a.tipo)
        return -1;
    else if (a.tipo === b.tipo)
        return a.nombre-b.nombre;
});

//creciente
/*
comparacion = pokemon.sort((b,a)=>{
    if (a.tipo<b.tipo)
        return 1;
    else if(b.tipo<a.tipo)
        return -1;
    else if (a.tipo === b.tipo)
        return a.nombre-b.nombre;
});
*/
//console.log(comparacion);