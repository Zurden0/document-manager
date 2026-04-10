<?php
global $database, $host, $username, $db_pass;
require __DIR__ . "/../general/config.php";

$db = new mysqli($host, $username, $db_pass, $database);
header("!-mysql-thread-id:" .$db->thread_id);

$data = file_get_contents('php://input');
$json = json_decode($data, true);

$chat_id = $json["chat_id"];

$mysql_data = $db->query("SELECT `name` FROM `chats` WHERE `id` = $chat_id");
$name = $mysql_data -> fetch_assoc();


echo json_encode(["name" => $name]);
exit;
