import * as ppt from "./PPT.js"

window.onload = function(){
    document.getElementById('jugar').addEventListener('click', jugar)
}

function jugar() {
    let datos_jugador = ["Jugador 1",0,0]
    var jugador1 = new ppt.Jugador(datos_jugador);

    let datos_jugador2 = ["Jugador 2",0,0]
    var jugador2 = new ppt.Jugador(datos_jugador2);

    var partida = new ppt.Juego(jugador1, jugador2);
    document.getElementById('partida').innerHTML = ''
    while ((jugador1.rondas_ganadas<3) && (jugador2.rondas_ganadas<3)) {
    	jugador1.mano();
    	jugador2.mano();
    	document.getElementById('partida').innerHTML += jugador1.tirada+" vs "+jugador2.tirada+ "==>" + partida.ronda()+ "<br><br>";
    }
    if (jugador1.rondas_ganadas==3) {
        document.getElementById('partida').innerHTML += "<h1>Gano el jugador 1</h1>"
    }else{
        document.getElementById('partida').innerHTML += "<h1>Gano el jugador 2</h1>"
    }
}
