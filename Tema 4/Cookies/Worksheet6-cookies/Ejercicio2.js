/*Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar 
el color de fondo, de párrafo y el tamaño de la letra.*/

window.onload=()=>{
    document.getElementById("crear").addEventListener("click",crearCookie);
    document.getElementById("borrar").addEventListener("click",borrarCookie);
    document.getElementById('color').addEventListener('input',darcolor);
    document.getElementById('colorparrafo').addEventListener('input',cambiarcolorparrafo);
    document.getElementById('tam').addEventListener('input',cambiartamañofuente);
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

function darcolor(){
    document.body.style.backgroundColor=document.getElementById("color").value;
}

function cambiarcolorparrafo(){
    document.getElementById('parrafo').style.backgroundColor=document.getElementById("colorparrafo").value;
}

function cambiartamañofuente(){
    document.body.style.fontSize=document.getElementById("tam").value + 'px';
}

