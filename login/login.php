<?php
global $database, $host, $username, $db_pass;
require "./../general/config.php";
$db = new mysqli($host, $username, $db_pass, $database);
session_start();

$login = $_POST["login-or-mail"];
$pass = $_POST["pass"];

$user_data = $db->query("SELECT `id`, `pass` FROM `auth` WHERE login='$login' OR email='$login'");
$user_json_data = $user_data->fetch_assoc();

if (password_verify($pass, $user_json_data["pass"])) {
    $_SESSION["user_id"] = $user_json_data["id"];

    header("Location: ../welcome.html");
} else {
    header("Location: ../login.html?error=incorrect-pass-or-login");
}

exit;