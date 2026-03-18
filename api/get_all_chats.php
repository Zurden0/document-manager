<?php
global $database, $host, $username, $db_pass;
require __DIR__ . "/../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$user_id = $_SESSION["user_id"];

$mysql_data = $db->query("
SELECT chats.*, auth.login
FROM chat_member 
    JOIN chats ON chats.id = chat_member.chat_id 
    JOIN auth ON auth.id = chats.admin_id 
WHERE chat_member.user_id = $user_id");

$chats = $mysql_data->fetch_all(MYSQLI_ASSOC);

echo json_encode($chats);


