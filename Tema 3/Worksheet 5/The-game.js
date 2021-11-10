class Jugador {
    constructor(datos_jugador) {
        this.nombre = datos_jugador.nombre;
        this.rondas_ganadas = datos_jugador.rondas_ganadas;
        this.rondas_perdidas = datos_jugador.rondas_perdidas
        this.tirada = null
    }

    mano() {
        let tirada = Math.floor(Math.random() * (4 - 1)) + 1; // Saca un valor entre 1 y 3 incluido
        switch (tirada) {
            case 1:
                this.tirada='Piedra';
                break;
            case 2:
                this.tirada='Papel';
                break;
            case 3:
                this.tirada='Tijera';
                break;
        }
    }

    resultados() {
        return `El jugador ${this.nombre} ha ganado ${this.rondas_ganadas} y perdido ${this.rondas_perdidas}`
    }
}

class Juego {
    constructor(jugador1, jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }

    partida() {
        if (this.jugador1.tirada == this.jugador2.tirada) {
            console.log("Empate");
        } else if (this.jugador1.tirada == "Piedra" && this.jugador2.tirada == "Tijera") {
            console.log("El jugador 1 ha ganado");
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
        } else if (this.jugador1.tirada == "Piedra" && this.jugador2.tirada == "Papel") {
            console.log("El jugador 2 ha ganado");
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
        } else if (this.jugador1.tirada == "Papel" && this.jugador2.tirada == "Piedra") {
            console.log("El jugador 1 ha ganado");
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
        } else if (this.jugador1.tirada == "Papel" && this.jugador2.tirada == "Tijera") {
            console.log("El jugador 2 ha ganado");
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
        } else if (this.jugador1.tirada == "Tijera" && this.jugador2.tirada == "Papel") {
            console.log("El jugador 1 ha ganado");
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
        } else if (this.jugador1.tirada == "Tijera" && this.jugador2.tirada == "Piedra") {
            console.log("El jugador 2 ha ganado");
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
        }
    }
}

// JUGADORES
datos_jugador = {
    nombre: "David",
    rondas_ganadas: 0,
    rondas_perdidas: 0

}
var jugador1 = new Jugador(datos_jugador); // Creo jugador 1 y sus datos

datos_jugador2 = {
    nombre: "Javi",
    rondas_ganadas: 0,
    rondas_perdidas: 0
}
var jugador2 = new Jugador(datos_jugador2); // Creo jugador 2 y sus datos

// JUGADORES

//PARTIDA

jugador1.mano();
jugador2.mano();
var juego1 = new Juego(jugador1, jugador2);

console.log(jugador1.tirada);
console.log(jugador2.tirada);

juego1.partida();

console.log(jugador1.resultados());
console.log(jugador2.resultados());

// Repito código para jugar a dos rondas
jugador1.mano();
jugador2.mano();

console.log(jugador1.tirada);
console.log(jugador2.tirada);

juego1.partida();

console.log(jugador1.resultados());
console.log(jugador2.resultados());