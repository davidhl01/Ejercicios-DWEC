/*6. Un método clásico para redactar mensajes secretos se llama código cuadrado. 
Los espacios se eliminan del texto en inglés y los caracteres se escriben en un 
cuadrado (o rectángulo). Por ejemplo, la oración "Si el hombre estuviera destinado a 
permanecer en el suelo, Dios nos habría dado raíces" tiene 54 caracteres, 
por lo que está escrito en un rectángulo con 7 filas y 8 columnas.
El mensaje codificado se obtiene leyendo las columnas que van de izquierda a derecha. 
Por ejemplo, el mensaje anterior se codifica como:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
Escribe una función que reciba un mensaje y lo devuelva codificado (que la longitud 
máxima del mensaje sea de 81 caracteres). A continuación, se muestran algunos 
ejemplos más:*/

cadena = 'If man was meant to stay on the ground god would have given us roots';

array = cadena.split('');

for (let i = 0; i< array.length; i++){
    if (array[i]===' '){
        array.splice(i, 1);
    };
};

while (array.length%8!=0){
    array.push('')
}

array2 = []
while (array.length>0){
    for (let e = 0; e<(array.length)+1; e++){
        array2.push(array.splice(0,8));
    }
}

array2.forEach(linea =>{
    linea.forEach(caracter=>{
        document.write(caracter);
    })
    document.write('<br>');
})

for(let posicion = 0; posicion<8; posicion++){
    for(let linea of array2){
        document.write(linea[posicion])
    }
    document.write(' ')
}