/*Crea una web que calcula la hipotenusa de un triángulo rectángulo
(pidiendo al usuario el tamaño de los dos catetos):*/

function calcu_hipo(c1, c2) {
    let hipo = Math.sqrt((c1 ** 2) + (c2 ** 2))
    return hipo
}

document.write(calcu_hipo((parseInt(prompt('Primer cateto: '))), (parseInt(prompt('Segundo cateto: ')))));