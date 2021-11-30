window.onload = () => {
    document.getElementById("crear").addEventListener("click", crearCookie);
    document.getElementById("borrar").addEventListener("click", borrarCookie);
    document.getElementById("mostrar").addEventListener("click", mostrarCookie);

    document.getElementById("crearImagen").addEventListener("click", crearImagen);
    document.getElementById("crearLI").addEventListener("click", crearLI);

    document.getElementById("lista").children[0].addEventListener("click",borraEntrada);
    document.getElementById("lista").children[1].addEventListener("click",borraEntrada);

}

function borraEntrada(e){
    document.getElementById("lista").removeChild(e.target);
}

function crearImagen(){
    let imagenNueva = document.createElement("img");
    imagenNueva.src = "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg";
    imagenNueva.style.border = '1px solid black';
    imagenNueva.style.width = '200px';
    imagenNueva.addEventListener("click",borrarImg);
    document.body.appendChild(imagenNueva);
}

function borrarImg(event){
    document.body.removeChild(event.target);
    console.log('borrar img');
}

function crearLI(){
    let nuevaEntrada = document.createElement("li");
    let texto = document.getElementById("textoLI").value;
    nuevaEntrada.innerHTML = texto;
    nuevaEntrada.addEventListener("click",borraEntrada);
    nuevaEntrada.id = "entradaLI"+numeroLI;
    numeroLI++;
    document.getElementById("lista").appendChild(nuevaEntrada);
}

function crearCookie() {
    document.cookie = "usuario=jose";
}

function borrarCookie(){
    document.cookie = "usuario=jose; max-age=0;";
}

function mostrarCookie(){
    console.log(document.cookie);
}

var numeroLI = 1;