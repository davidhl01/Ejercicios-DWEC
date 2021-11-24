class Jugador {
    constructor(datos_jugador) {
        this.nombre = datos_jugador[0];
        this.rondas_ganadas = datos_jugador[1];
        this.rondas_perdidas = datos_jugador[2];
        this.tirada = null;
    }

    mano() {
        let tirada = Math.floor(Math.random() * (4 - 1)) + 1; // Saca un valor entre 1 y 3 incluido
        switch (tirada) {
            case 1:
                this.tirada='<img src="Piedra.png">';
                break;
            case 2:
                this.tirada='<img src="Papel.png">';
                break;
            case 3:
                this.tirada='<img src="Tijera.png">';
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

    ronda() {
        if (this.jugador1.tirada == this.jugador2.tirada) {
            return("Empate");
        } else if (this.jugador1.tirada == '<img src="Piedra.png">' && this.jugador2.tirada == '<img src="Tijera.png">') {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return("El jugador 1 ha ganado");
        } else if (this.jugador1.tirada == '<img src="Piedra.png">' && this.jugador2.tirada == '<img src="Papel.png">') {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return("El jugador 2 ha ganado");
        } else if (this.jugador1.tirada == '<img src="Papel.png">' && this.jugador2.tirada == '<img src="Piedra.png">') {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return("El jugador 1 ha ganado");
        } else if (this.jugador1.tirada == '<img src="Papel.png">' && this.jugador2.tirada == '<img src="Tijera.png">') {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return("El jugador 2 ha ganado");
        } else if (this.jugador1.tirada == '<img src="Tijera.png">' && this.jugador2.tirada == '<img src="Papel.png">') {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return("El jugador 1 ha ganado");
        } else if (this.jugador1.tirada == '<img src="Tijera.png">' && this.jugador2.tirada == '<img src="Piedra.png">') {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return("El jugador 2 ha ganado");
        }
    }
}


export {Jugador, Juego};