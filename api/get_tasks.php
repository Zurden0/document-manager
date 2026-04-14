<?php
global $database, $host, $username, $db_pass;
require __DIR__ . "/../general/config.php";

$db = new mysqli($host, $username, $db_pass, $database);
header("!-mysql-thread-id:" .$db->thread_id);

$data = file_get_contents('php://input');
$json = json_decode($data, true);

$chat_id = $json["chat_id"];

$mysql_data = $db->query("
SELECT 
    tfc.id,
    tfc.task_name,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', tft.id,
            'name', tft.name,
            'admin', tft.admin,
            'status', tft.status,
            'answer_date', tft.answer_date,
            'question_link', tft.question_link,
            'answer_link', tft.answer_link,
            'comment', tft.comment
        )
    ) AS task_data
FROM tasks_for_chat tfc
LEFT JOIN tasks_for_task tft ON tft.for_task_id = tfc.id
WHERE tfc.chat_id = $chat_id
GROUP BY tfc.id;");

$tasks = $mysql_data -> fetch_all(MYSQLI_ASSOC);

foreach ($tasks as &$task) {
    $task['task_data'] = json_decode($task['task_data'], true);
    $i = 0;
    foreach ($task['task_data'] as $task_for_task) {
        if ($task_for_task["id"] == null) {
            unset($task['task_data'][$i]);
        }
        $i += 1;
    }
}

echo json_encode($tasks);
exit;
