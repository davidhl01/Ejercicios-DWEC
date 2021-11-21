/*Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. 
La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false según cumpla 
los requisitos de validación:
validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
validarCorreo: El parámetro debe tener el formato correcto de un email
validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
validarLongitud: El parámetro debe tener al menos 8 caracteres.
validarNumero: El parámetro debe contener al menos un dígito.*/

function validarMayuscula(cadena){
    var regex = new RegExp("^[A-Z]{1}[a-z]+$");
    if(regex.test(cadena) == false){
        return false;
    }else{
        return true;
    }
}

document.write(validarMayuscula("Hmkkh") + '<br>');


function validarCaracteresEspeciales(cadena){
    var regex = new RegExp("^[!@#$%^&a-zA-Z]+$");
    if(regex.test(cadena) == false){
        return false;
    }else{
        return true;
    }
}

document.write(validarCaracteresEspeciales("#@$aA") + '<br>');


function validarCorreo(cadena){
    var regex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z]+[\.][a-zA-Z]+$");
    if(regex.test(cadena) == false){
        return false;
    }else{
        return true;
    }
}

document.write(validarCorreo("jajAaja01j@gmail.com") + '<br>');

function validarTarjetaCredito(cadena){
    var regex = new RegExp("^([0-9]{4}[' ']){4}");
    if(regex.test(cadena) == false){
        return false;
    }else{
        return true;
    }
}

document.write(validarTarjetaCredito("0000 0000 0000 0000") + '<br>');

function validarLongitud(cadena){
    var regex = new RegExp("^[0-9]{8,}$");
    if(regex.test(cadena) == false){
        return false;
    }else{
        return true;
    }
}

document.write(validarLongitud("0000000000000000") + '<br>');

function validarNumero(cadena){
    var regex = new RegExp("^[0-9]+$");
    if(regex.test(cadena) == false){
        return false;
    }else{
        return true;
    }
}

document.write(validarNumero("12345666666666666666666") + '<br>');
