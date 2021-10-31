/*1. - Crea un script que pregunte al usuario por el nombre de un mes, y muestre el número de días que
tiene el mes.*/
var month = prompt('Tell me a month: ');

switch (month) {
    case 'January':
        alert('January has 31 days');
        break;
    case 'February':
        alert('February has 28 days');
        break;
    case 'March':
        alert('March has 31 days');
        break;
    case 'April':
        alert('April has 30 days');
        break;
    case 'May':
        alert('May has 31 days');
        break;
    case 'June':
        alert('June has 30 days');
        break;
    case 'July':
        alert('July has 31 days');
        break;
    case 'August':
        alert('August has 31 days');
        break;
    case 'September':
        alert('September has 30 days');
        break;
    case 'October':
        alert('October has 31 days');
        break;
    case 'November':
        alert('November has 30 days');
        break;
    case 'December':
        alert('December has 31 days');
}

/*2. - Crea un script que pregunte al usuario por un número, y determine si es par, si es múltiplo de tres, y
si es múltiplo de 5.*/

num = parseInt(prompt('Dime un numero: '));

if (num % 2 == 0) {
    mul = 'par';
} else if (num % 3 == 0) {
    mul = 'Multiplo3';
} else if (num % 5 == 0) {
    mul = 'Multiplo5';
} else {
    mul = 'irrelevante';
}

switch (mul) {
    case 'par':
        alert('Numero es par');
        break;
    case 'Multiplo3':
        alert('Numero es multiplo de 3');
        break;
    case 'Multiplo5':
        alert('Numero es multiplo de 5');
        break;
    case 'irrelevante':
        alert('Irrelevante');
        break;
}

/*3. - Crea un script que pida al usuario dos números y una operación(que puede ser el carácter + , -, * o / ).
El script debe devolver el resultado de la operación seleccionada por el usuario.*/
numero1 = prompt('Intoduce un número: ');
numero2 = prompt('Intoduce un número: ');
operacion = prompt('Introduce un operador para realizar la operación: ');

switch (operacion) {
    case '+':
        alert(numero1 + numero2)

    case '-':
        alert(numero1 - numero2)
    case '/':
        alert(numero1 / numero2)
    case '*':
        alert(numero1 * numero2)
}