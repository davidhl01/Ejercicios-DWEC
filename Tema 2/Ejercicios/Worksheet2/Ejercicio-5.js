/*crea una web para resolver ecuaciones de segundo grado.Deberá
pedir por tanto los coeficientes y mostrar las soluciones posibles.*/

function ecuacion_2_grado(a, b, c) {
    let x1 = (-b + (Math.sqrt(b ** 2 - 4 * a * c))) / (2 * a);
    let x2 = (-b - (Math.sqrt(b ** 2 - 4 * a * c))) / (2 * a);
    return (x1 + ' o ' + x2);
};

document.write(ecuacion_2_grado(2, -3, 1));