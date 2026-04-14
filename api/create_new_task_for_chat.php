<?php
global $database, $host, $username, $db_pass;
require __DIR__ . "/../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$data = file_get_contents('php://input');
$json = json_decode($data, true);


$chat_id = $json["chat_id"];
$task_name = $json["task_name"];

$is_set = $db->query("SELECT 1 FROM `tasks_for_chat` WHERE `task_name` = '$task_name' AND `chat_id` = $chat_id") -> num_rows > 0;

if (!$is_set) {
    $db->query("INSERT INTO `tasks_for_chat` (`chat_id`, `task_name`) VALUES ($chat_id, '$task_name')");
    echo json_encode(["status" => "success"]);
}

exit;
