window.onload=()=>{
    document.getElementById("Crear").addEventListener("click",crearCookie);
    document.getElementById("Borrar").addEventListener("click",borrarCookie);
    document.getElementById("Mostrar").addEventListener("click",mostrarCookie);
}

function crearCookie(e){
    e.preventDefault();
    document.cookie="usuario=David";
}

function borrarCookie(){
    document.cookie="usuario=David; max-age=0;"
}

function mostrarCookie(){
    console.log(document.cookie);
}