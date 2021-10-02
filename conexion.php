<?php
// PDO conexion data base
function connect() {
	$hostname = 'na2.ultra-h.com';
	$name = 'server_6846_players';
	$user = 'server_6846';
	$password = '12345';
    return new PDO('mysql:host='.$hostname.';dbname='.$name, $user, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}
?>
