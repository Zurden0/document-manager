<?php
global $database, $host, $username, $db_pass;
require "./../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$user_id = $_SESSION["user_id"];

$mysql_data = $db -> query("SELECT `login` FROM `auth` WHERE id = $user_id");
$login = $mysql_data->fetch_assoc()["login"];


echo json_encode(["login" => $login]);