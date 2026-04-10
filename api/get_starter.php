<?php
global $database, $host, $username, $db_pass;
require __DIR__ . "/../general/config.php";

$db = new mysqli($host, $username, $db_pass, $database);
header("!-mysql-thread-id:" .$db->thread_id);

session_start();

$data = [];

if (isset($_SESSION["user_id"])) {
    $user_id = $_SESSION["user_id"];;
    $data["user_id"] = $user_id;
} else {
    echo json_encode(["data" => null]);
    exit();
}

$mysql_data = $db -> query("SELECT `login` FROM `auth` WHERE id = $user_id");
$data["login"] = $mysql_data->fetch_assoc();


$mysql_data = $db->query("
SELECT `resent_member_chat`.`chat_id`, `chats`.`name`, `chats`.`is_corporate_chat`, `resent_member_chat`.`last_watch` 
FROM `resent_member_chat` 
    JOIN `chats` ON `chats`.`id` = `resent_member_chat`.`chat_id`
WHERE `user_id` = $user_id 
ORDER BY `resent_member_chat`.`last_watch` DESC");
$data["resents_chat"] = $mysql_data->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);
exit();
