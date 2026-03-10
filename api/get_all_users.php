<?php
global $database, $host, $username, $db_pass;
require "./../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);

$mysql_data = $db -> query("SELECT `id`, `login` FROM `auth`");
$users = $mysql_data->fetch_all(MYSQLI_ASSOC);


echo json_encode($users);