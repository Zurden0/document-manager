<?php
global $database, $host, $username, $db_pass;
require "./../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$login = $_POST["login"];
$mail = $_POST["mail"];
$pass = $_POST["pass"];
$conf_pass = $_POST["conf-pass"];

if ($pass === $conf_pass) {
    $hash_pass = password_hash($pass, PASSWORD_DEFAULT);
    try {
        $insert_data = $db->query("INSERT INTO `auth`(login, pass, email) VALUES ('$login', '$hash_pass', '$mail')");
        $_SESSION["user_id"] = $db->insert_id;
    } catch (mysqli_sql_exception) {
        header("Location: ../document_manager/register.html?error=login-or-email-exist");
        exit;
    }
} else {
    header("Location: ../document_manager/register.html?error=variable-pass");
    exit;
}

header("Location: ../document_manager/index.html");
exit;