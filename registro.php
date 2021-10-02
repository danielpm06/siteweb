<?php
//Configuracion de la conexion a base de datos
  $bd_host = "na2.ultra-h.com";
  $bd_usuario = "server_6846";
  $bd_password = "12345";
  $bd_base = "server_6846_players";
$con = mysql_connect($bd_host, $bd_usuario, $bd_password);
mysql_select_db($bd_base, $con);
//variables POST
  $nom=$_POST['LOGIN'];
  $dep=$_POST['PASSWORD'];
  $suel=$_POST['DAYS'];
//registra los datos del empleados
  $sql="INSERT INTO players (LOGIN, PASSWORD, DAYS) VALUES ('$LogIn','$Pass',30)";
mysql_query($sql,$con);
  ?>
