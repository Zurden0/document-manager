<?php
session_start();
global $database, $host, $username, $db_pass;
require __DIR__ . "/../general/config.php";

$db = new mysqli($host, $username, $db_pass, $database);

if ($db->connect_error) {
    die("DB ERROR: " . $db->connect_error);
}

$login = $_POST["login-or-mail"] ?? "";
$pass = $_POST["pass"] ?? "";

// Подготовленный запрос (безопасно)
$stmt = $db->prepare("SELECT id, pass FROM auth WHERE login = ? OR email = ?");
$stmt->bind_param("ss", $login, $login);
$stmt->execute();
$result = $stmt->get_result();

$user = $result->fetch_assoc();

if (!$user) {
    header("Location: ../document_manager/login.html?error=user-not-found");
    exit;
}

if (password_verify($pass, $user["pass"])) {
    $_SESSION["user_id"] = $user["id"];
    header("Location: ../document_manager/index.html");
} else {
    header("Location: ../document_manager/login.html?error=incorrect-pass-or-login");
}
exit;
