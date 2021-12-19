<?php

session_start();

$usuario = $_POST['usuario'];
echo $usuario;

$errusuario = "<p class=parrafo>Introduce un usuario<p>";

$contraseña = $_POST['contraseña'];
echo $contraseña;

$errcontraseña = "<p class=parrafo>Introduce una contraseña";


if(isset($_POST)){
    if($usuario!=""){
        $_SESSION['usuario']=$usuario;
        $_SESSION["errusuario"]="";
    }else{
        $_SESSION["errusuario"]=$errusuario;
    }if($contraseña!=""){
        $_SESSION['contraseña']=$contraseña;
        $_SESSION["errcontraseña"]="";
    }else{
        $_SESSION["errcontraseña"]=$errcontraseña;
    }
}

header('Location: index.php');
?>