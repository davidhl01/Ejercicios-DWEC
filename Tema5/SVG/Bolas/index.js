import { Bola, Interfaz, Aleatorio, InterfazRectangulo, Rectangulo } from "./bola_mimodulo.js"

window.onload = () => {
    let mibola = new Bola(Aleatorio(5, 9), Aleatorio(15, 40), Aleatorio(15, 40), Aleatorio(6, 12), Aleatorio(6, 12));
    let interfaz = new Interfaz(mibola, document.getElementById("panel"));

    let mirectangulo1 = new Rectangulo(50, 50);
    let interfazcuadrada = new InterfazRectangulo(mirectangulo1, document.getElementById("panel"));

    var tam = document.getElementById("panel");
    setInterval(() => {
        mibola.moverse(tam.clientWidth, tam.clientWidth);
        interfaz.dibuja();
    }, 30);

    
    interfazcuadrada.dibuja();
    


};