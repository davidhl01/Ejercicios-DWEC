// Creamos la clase Bola para encapsular el ejercicio
class Bola {
    constructor(radio, posicionX, posicionY, velocidadX, velocidadY) {
        this.radio = radio;
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;

    }

    moverse(svgancho, svgalto) {
        this.posicionX += this.velocidadX;
        this.posicionY += this.velocidadY;

        // Posicion X
        if (((this.posicionX - this.radio) < 0) || ((this.posicionX + this.radio) > svgancho)) { // Añadimos el rebote horizontal
            this.velocidadX *= -1;
        }

        // Posicion Y
        if (((this.posicionY - this.radio) < 0) || ((this.posicionY + this.radio) > svgalto)) { // Añadimos el rebote vertical
            this.velocidadY *= -1;
        }

    }

}

class Interfaz {
    constructor(bola, svg, color) {
        this.bola = bola;
        this.tagbola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.tagbola.setAttribute("cx", bola.posicionX);
        this.tagbola.setAttribute("cy", bola.posicionY);
        this.tagbola.setAttribute("r", bola.radio);
        this.tagbola.setAttribute("fill", color);
        this.svg = svg;
        this.svg.appendChild(this.tagbola);

    }

    dibuja() {
        this.tagbola.setAttribute("cx", this.bola.posicionX);
        this.tagbola.setAttribute("cy", this.bola.posicionY);
    }
}

function Aleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


// Clases para los rectángulos
class Rectangulo {
    constructor(width, height, posicionX) {
        this.width = width;
        this.height = height;
        this.posicionX = posicionX;
    }

    /*moverse(svgalto) {

    }*/
}

class InterfazRectangulo {
    constructor(rectangulo, svg, color) {
        this.rectangulo = rectangulo;
        this.tagrectangulo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.tagrectangulo.setAttribute("width", rectangulo.width);
        this.tagrectangulo.setAttribute("height", rectangulo.height);
        this.tagrectangulo.setAttribute("x",rectangulo.posicionX);
        this.tagrectangulo.setAttribute("fill", color);
        this.svg = svg;
        this.svg.appendChild(this.tagrectangulo);

    }

    dibuja() {
        this.tagrectangulo.setAttribute("width", this.rectangulo.width);
        this.tagrectangulo.setAttribute("height", this.rectangulo.height);
        this.tagrectangulo.setAttribute("x",this.rectangulo.posicionX);
    }
}
export { Bola, Interfaz, Aleatorio, InterfazRectangulo, Rectangulo };