class Gato{
    constructor(nombre){
        this.nombre = nombre;
        this.clicks = 0;
    
    }

    contar(){
        this.clicks ++;
        console.log(this.clicks + " veces clickeado");
    }
}

class InterfazGato{
    constructor(gato){
        this.gato = gato;
    }

    mostrar(){j
        this.gato.setAttribute("width", this.gato.width);
        this.gato.setAttribute("height", this.gato.height);
    }
}

window.onload = () => {
    // imgs = document.getElementsByTagName('img');
    // clicks = new Array(imgs.length);
    // clicks.fill(0);

    // for (let i = 0; i < imgs.length; i++) {
    //     imgs[i].addEventListener('click', (e) => {
    //         clicks[i]++;
    //         console.log(clicks[i], imgs[i].id);
    //     });
    // }

    var gato1 = new Gato("Firulais");
    var interfaz1 = new InterfazGato(gato1);

    interfaz1.mostrar(gato1);
    gato1.addEventListener("click", gato1.contar());
}