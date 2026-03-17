<?php
global $database, $host, $username, $db_pass;
require "./../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$user_id = $_SESSION["user_id"];

$mysql_data = $db->query("
SELECT `resent_member_chat`.`chat_id`, `chats`.`name`, `chats`.`is_corporate_chat`, `resent_member_chat`.`last_watch` 
FROM `resent_member_chat` 
    JOIN `chats` ON `chats`.`id` = `resent_member_chat`.`chat_id`
WHERE `user_id` = $user_id 
ORDER BY `resent_member_chat`.`last_watch` DESC");
$resents_chat = $mysql_data->fetch_all(MYSQLI_ASSOC);

echo json_encode($resents_chat);
exit;
