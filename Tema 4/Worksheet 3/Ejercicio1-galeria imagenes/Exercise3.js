/*Por último aplica todo lo anterior creando una galería de imágenes. 
Para ello, prepara en la carpeta de tu proyecto un número de imágenes numeradas como 1.jpg, 2.jpg, etc... 
Nuestra galería de imágenes mostrará tan sólo una imagen y dos botones para pasar a la anterior y posterior. 
Cuando lleguemos a los límites (imagen 1 o imagen última) desactivaremos el botón que corresponda (siguiente o anterior). 
Para cambiar la imagen a mostrar sólo deberemos hacer document.getElementById("idTagImg").src=numImagen+".jpg" 
Una vez conseguido esto, utiliza la librería Hammer.js para pasar las imágenes con el gesture panright y panleft. 
Por último, añade eventos de rotación para deformar la imagen.*/

const boton1 = document.getElementById("Anterior");

const boton2 = document.getElementById("Siguiente");

incremento = 1;

pulsarAnterior = function(){
    incremento -= 1;
    if(incremento < 1){
        incremento = 6;
        document.getElementById("imagen").src=incremento + ".png";
    }
    else{
    document.getElementById("imagen").src=incremento + ".png";
    }
}

pulsarSiguiente = function(){
    incremento += 1;
    if(incremento > 6){
        incremento = 1;
        document.getElementById("imagen").src=incremento + ".png";
    }
    else{
        document.getElementById("imagen").src=incremento + ".png";
    }
}

boton1.onclick = pulsarAnterior;
boton2.onclick = pulsarSiguiente;