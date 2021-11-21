/*4. Crea 3 funciones genéricas para el manejo de cookies:
    a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un 
    par identificador=valor.
    b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el 
    identificador indicado si existe o null en caso contrario.
    c) BorrarCookie().*/

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