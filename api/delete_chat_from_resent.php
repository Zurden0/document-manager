<?php
global $database, $host, $username, $db_pass;
require "./../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$data = file_get_contents('php://input');
$json = json_decode($data, true);

$user_id = $_SESSION["user_id"];
$chat_id = $json["chat_id"];

$db->query("DELETE FROM `resent_member_chat` WHERE `chat_id` = $chat_id AND `user_id` = $user_id");
exit;
