/*Diseña una web que hará uso de cookies para guardar el nombre del usuario. 
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del 
usuario y almacenarlo en una cookie que caducará en 5 minutos. 
Tras esto saludará al usuario mediante un mensaje en pantalla. 
En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior 
directamente. Deberá proporcionar también un enlace para borrar la 
cookie (lo que podríamos llamar 'Cerrar Sesión').*/

window.onload=()=>{
    document.getElementById("crear").addEventListener("click",crearCookie);
    document.getElementById("borrar").addEventListener("click",borrarCookie);
}

function crearCookie(){
    if(!document.cookie){
        var usuario = prompt("Dime el nombre de usuario:");
        document.cookie=`usuario=${usuario}`;
        alert('Hola '+ document.cookie);
    }else{
        alert('Hola '+ document.cookie);
    }
}

function borrarCookie(){
    document.cookie=`usuario=; max-age=0;`;
}

function mostrarCookie(){
    console.log(document.cookie);
}