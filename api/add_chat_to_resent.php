<?php
global $database, $host, $username, $db_pass;
require "./../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$data = file_get_contents('php://input');
$json = json_decode($data, true);

$user_id = $_SESSION["user_id"];
$chat_id = $json["chat_id"];
$current_time = date("Y-m-d H:i:s");

$is_set = $db->query("SELECT 1 FROM `resent_member_chat` WHERE `chat_id` = $chat_id AND `user_id` = $user_id") -> num_rows > 0;

if (!$is_set) {
    $db->query("INSERT INTO `resent_member_chat` (`chat_id`, `user_id`, `last_watch`) VALUES ($chat_id, $user_id, '$current_time')");
}

exit;



