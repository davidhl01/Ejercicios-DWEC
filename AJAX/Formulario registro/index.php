<?php
session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <style>.parrafo{color: red;} </style>
</head>
<body>
    <form method="POST" action="comprobacion.php">
        <label for ="usuario">Usuario</label>
        <input type ="text" id ="usuario" name ="usuario">
        <?php
            if(isset($_SESSION['errusuario'])){
                echo $_SESSION['errusuario'];
            }
        ?>
        <br>
        <label for ="contraseña">Contraseña</label>
        <input type ="text" id ="contraseña" name ="contraseña">
        <?php
            if(isset($_SESSION['errcontraseña'])){
                echo $_SESSION['errcontraseña'];
            }
        ?>
        <br>
        <input type ="submit" value ="Enviar">
    </form>
</body>
</html>