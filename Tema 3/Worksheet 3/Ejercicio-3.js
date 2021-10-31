/*3. Búsqueda del tesoro:

¿Te gustan las búsquedas del tesoro? En este problema, 
debe escribir un programa para explorar la matriz anterior en busca de un tesoro. 
Los valores de la matriz son pistas. 
Cada celda contiene un número entero entre 11 y 55; 
para cada valor, el dígito de la decena representa el número de fila y el dígito de la unidad 
representa el número de columna de la celda que contiene la siguiente pista. 
Comenzando en la esquina superior izquierda (en 1,1), use las pistas para guiar su búsqueda de la matriz. 
(Las primeras tres pistas son 11, 34, 42). 
El tesoro es una celda cuyo valor coincide con sus coordenadas. 
Su programa primero debe leer los datos del mapa del tesoro en una matriz de 5 por 5. 
Su programa debería mostrar las celdas que visita durante su búsqueda y un 
mensaje que indique dónde encontró el tesoro.*/

arr = [
    ['34', '21', '32', '41', '25'],
    ['14', '42', '43', '14', '31'],
    ['54', '45', '52', '42', '23'],
    ['33', '15', '51', '31', '35'],
    ['21', '52', '33', '13', '23']
]

celda = arr[0][0];//34
fila = 0;
columna = 0;
while(parseInt(celda[0]) != parseInt(fila)){
    fila = celda[0];
    columna = celda[1];
    celda = arr[parseInt(fila)- 1] [parseInt(columna)-1];
} 
document.write(`El tesoro está en ${celda}`);
