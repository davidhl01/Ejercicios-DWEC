/*5. Escriba un programa para buscar los "puntos silla" en una matriz de 
números enteros de 5 por 5. Un punto de silla es una celda cuyo valor es mayor o 
igual a cualquiera en su fila y menor o igual a cualquiera en su columna. 
Puede haber más de un punto de silla en la matriz. 
Imprima las coordenadas de cualquier punto de silla que encuentre su programa. 
Imprima "Sin puntos silla" si no hay ninguno.*/

function saddlepoint(arr) {

    let max, min;

    for (i = 0; i < arr.length; i++)
        for (j = 0; j < arr[i].length; j++) {

            let columna = [];
            max = Math.max(...arr[i]);

            for (k = 0; k < arr[i].length; k++) {
                columna.push(arr[j][k]);
            }

            min = Math.min(...columna);

            if (arr[i][j] >= max && arr[i][j] <= min) {
                console.log(i + ", " + j)

            }
        }

}
a = [[1, 3, 2, 7], [1, 3, 2, 8], [1, 3, 2, 3], [1, 3, 2, 7]];

saddlepoint(a);