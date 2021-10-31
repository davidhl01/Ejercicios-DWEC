/*Mejora el ejercicio anterior
para que continúe realizando el mismo cálculo
hasta que el usuario decida que no quiere continuar.*/

function calcular_hipotenusa(c1, c2) {
    let hipo = Math.sqrt((c1 ** 2) + (c2 ** 2))
    return hipo
};

function bucle() {
    do {
        alert(calcular_hipotenusa((parseInt(prompt('Primer cateto: '))),
            (parseInt(prompt('Segundo cateto: ')))));
        document.write('<br>' + calcular_hipotenusa((parseInt(prompt('Primer cateto: '))),
            (parseInt(prompt('Segundo cateto: ')))));
        condition = prompt('You want to continues?: (y/n)')
    } while (condition == 'y')
};

bucle()