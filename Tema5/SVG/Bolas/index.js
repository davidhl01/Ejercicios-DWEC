import { Bola, Interfaz, Aleatorio, InterfazRectangulo, Rectangulo } from "./bola_mimodulo.js"

window.onload = () => {

    var svg = document.getElementById("panel");

    let mibola = new Bola(Aleatorio(10, 20), Aleatorio(30, 40), Aleatorio(20, 40), Aleatorio(12,14), Aleatorio(12, 14));
    let interfaz = new Interfaz(mibola, document.getElementById("panel"), "cyan");

    let mirectangulo1 = new Rectangulo(50, 200, (svg.getBoundingClientRect().width)-60);
    let interfazcuadrada1 = new InterfazRectangulo(mirectangulo1, svg, "purple");

    let mirectangulo2 = new Rectangulo(50, 200, 10);
    let interfazcuadrada2 = new InterfazRectangulo(mirectangulo2, svg, "purple");

    var tam = document.getElementById("panel");
    setInterval(() => {
        mibola.moverse(tam.clientWidth, tam.clientHeight);
        interfaz.dibuja();
    }, 30);

    
    interfazcuadrada1.dibuja();
    interfazcuadrada2.dibuja();
    


};