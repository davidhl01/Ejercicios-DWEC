const boton1 = document.getElementById("Anterior");

const boton2 = document.getElementById("Siguiente");

incremento = 1;

pulsarAnterior = function(){
    incremento -= 1;
    if(incremento < 1){
        incremento = 6;
        document.getElementById("imagen").src=incremento + ".png";
        document.getElementById("numeropagina").innerHTML = incremento+"/6";
    }
    else{
    document.getElementById("imagen").src=incremento + ".png";
    document.getElementById("numeropagina").innerHTML = incremento+"/6";
    }
}

pulsarSiguiente = function(){
    incremento += 1;
    if(incremento > 6){
        incremento = 1;
        document.getElementById("imagen").src=incremento + ".png";
        document.getElementById("numeropagina").innerHTML = incremento+"/6";
    }
    else{
        document.getElementById("imagen").src=incremento + ".png";
        document.getElementById("numeropagina").innerHTML = incremento+"/6";
    }
}

boton1.onclick = pulsarAnterior;
boton2.onclick = pulsarSiguiente;

window.addEventListener('deviceorientation', tratarOrientacion);
function tratarOrientacion(e) {
    document.getElementById("imagen").style.transform = "rotateX(" + e.alpha + "deg) rotateY("+ e.beta + "deg)";
}


/*var img = document.getElementById('imagen');
var hammer = new Hammer.Manager(img);
var swipe = new Hammer.Swipe();

hammer.add(swipe);

hammer.on('swipeleft', function(){
   $(img).animate({left: "-=100"}, 500)  
});

hammer.on('swiperight', function(){
   $(img).animate({left: "+=100"}, 500)  
});*/

var img = document.getElementById('imagen');
var hammer = Hammer(img);
hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});