<?php

$server = "localhost";
$user = "root";
$pasword = "";
$basededatos ="cetis107"; 

$conexion = new mysqli($server, $user, $pasword, $basededatos);

if($conexion->connect_error){
    die("Fallo la conexion " . $conexion->connect_error);
}
?>