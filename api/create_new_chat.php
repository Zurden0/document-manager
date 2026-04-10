<?php
global $database, $host, $username, $db_pass;
require __DIR__ . "/../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$data = file_get_contents('php://input');
$json = json_decode($data, true);

$admin_id = $_SESSION["user_id"];
$name = $json["name"];
$description = $json["description"];
$is_corporate_chat = $json["is_corporate_chat"] ? 1 : 0;
$selected_users = $json["selected_users"];

$mysql_data = $db->query("SELECT 1 FROM `chats` JOIN `chat_member` ON `chat_member`.`chat_id` = `chats`.`id` WHERE `chats`.`name` = '$name' AND `chat_member`.`user_id` = $admin_id");

if ($mysql_data->fetch_assoc()) {
    echo json_encode(["status" => "Чат с таким именем уже существует"]);
    exit;
}

$db->query("INSERT INTO `chats` (`name`, `description`, `is_corporate_chat`, `admin_id`) VALUES ('$name', '$description', $is_corporate_chat, $admin_id)");


$chat_id = $db->insert_id;

foreach ($selected_users as $user) {
    $user_id = $user["id"];
    $db->query("INSERT INTO `chat_member`(`chat_id`, `user_id`) VALUES ($chat_id, $user_id)");
}

$db->query("INSERT INTO `chat_member`(`chat_id`, `user_id`) VALUES ($chat_id, $admin_id)");

echo json_encode(["chat_id" => $chat_id]);




