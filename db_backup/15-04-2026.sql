-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 15 2026 г., 09:22
-- Версия сервера: 8.0.19
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `document_manager`
--

-- --------------------------------------------------------

--
-- Структура таблицы `auth`
--

CREATE TABLE `auth` (
  `id` int NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `auth`
--

INSERT INTO `auth` (`id`, `login`, `pass`, `email`) VALUES
(1, 'brehov', '$2y$10$HN2t5Nd8ndmmzuD8Urzhc.ORyLy2hrwprTdxkmhPdmJmWz44ZH8Ve', ''),
(2, 'german', '$2y$10$j7Qm0zzM8JGI8foH58KgIuUoeUYsKB.I7GRMALZ85r272eTUu0ekO', 'lene.gertim19@gmail.com');

-- --------------------------------------------------------

--
-- Структура таблицы `chats`
--

CREATE TABLE `chats` (
  `id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_corporate_chat` int NOT NULL,
  `admin_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `chats`
--

INSERT INTO `chats` (`id`, `name`, `description`, `is_corporate_chat`, `admin_id`) VALUES
(9, 'тест2', 'Описания  еще нет...', 0, 2),
(10, 'тест', 'новое описание', 1, 2),
(11, 'новый чат', 'Описания  еще нет...', 0, 2),
(12, 'корпоративный чат', 'Описания  еще нет...', 1, 2),
(13, 'tyty', 'Описания  еще нет...', 1, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `chat_member`
--

CREATE TABLE `chat_member` (
  `chat_id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `chat_member`
--

INSERT INTO `chat_member` (`chat_id`, `user_id`) VALUES
(9, 2),
(10, 1),
(10, 2),
(11, 2),
(12, 2),
(13, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `resent_member_chat`
--

CREATE TABLE `resent_member_chat` (
  `id` int NOT NULL,
  `chat_id` int NOT NULL,
  `user_id` int NOT NULL,
  `last_watch` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `resent_member_chat`
--

INSERT INTO `resent_member_chat` (`id`, `chat_id`, `user_id`, `last_watch`) VALUES
(24, 9, 2, '2026-03-17 12:23:04'),
(25, 11, 2, '2026-03-17 12:23:06'),
(27, 13, 2, '2026-04-10 10:09:24'),
(28, 10, 1, '2026-04-15 06:18:47'),
(29, 10, 2, '2026-04-15 06:20:18');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_for_chat`
--

CREATE TABLE `tasks_for_chat` (
  `id` int NOT NULL,
  `chat_id` int NOT NULL,
  `task_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tasks_for_chat`
--

INSERT INTO `tasks_for_chat` (`id`, `chat_id`, `task_name`) VALUES
(3, 9, 'qwe'),
(5, 11, ''),
(4, 11, '123'),
(1, 13, 'caasd'),
(2, 13, 'test');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_for_task`
--

CREATE TABLE `tasks_for_task` (
  `id` int NOT NULL,
  `for_task_id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `admin` int DEFAULT NULL,
  `status` int DEFAULT '1',
  `answer_date` datetime DEFAULT NULL,
  `question_link` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `answer_link` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `comment` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tasks_for_task`
--

INSERT INTO `tasks_for_task` (`id`, `for_task_id`, `name`, `admin`, `status`, `answer_date`, `question_link`, `answer_link`, `comment`) VALUES
(3, 4, 'qwer', NULL, 1, NULL, NULL, NULL, NULL),
(4, 4, 'test', NULL, 2, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `task_status`
--

CREATE TABLE `task_status` (
  `id` int NOT NULL,
  `value` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `task_status`
--

INSERT INTO `task_status` (`id`, `value`) VALUES
(1, 'free'),
(2, 'wip'),
(3, 'wait'),
(4, 'accept'),
(5, 'reject');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индексы таблицы `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin` (`admin_id`);

--
-- Индексы таблицы `chat_member`
--
ALTER TABLE `chat_member`
  ADD KEY `chat_member_ibfk_1` (`chat_id`),
  ADD KEY `chat_member_ibfk_2` (`user_id`);

--
-- Индексы таблицы `resent_member_chat`
--
ALTER TABLE `resent_member_chat`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chat_id` (`chat_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `tasks_for_chat`
--
ALTER TABLE `tasks_for_chat`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chat_id` (`chat_id`,`task_name`);

--
-- Индексы таблицы `tasks_for_task`
--
ALTER TABLE `tasks_for_task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin` (`admin`),
  ADD KEY `for_task_id` (`for_task_id`),
  ADD KEY `status` (`status`);

--
-- Индексы таблицы `task_status`
--
ALTER TABLE `task_status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `resent_member_chat`
--
ALTER TABLE `resent_member_chat`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT для таблицы `tasks_for_chat`
--
ALTER TABLE `tasks_for_chat`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `tasks_for_task`
--
ALTER TABLE `tasks_for_task`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `task_status`
--
ALTER TABLE `task_status`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `auth` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `chat_member`
--
ALTER TABLE `chat_member`
  ADD CONSTRAINT `chat_member_ibfk_1` FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `chat_member_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `auth` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `resent_member_chat`
--
ALTER TABLE `resent_member_chat`
  ADD CONSTRAINT `resent_member_chat_ibfk_1` FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `resent_member_chat_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `auth` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `tasks_for_chat`
--
ALTER TABLE `tasks_for_chat`
  ADD CONSTRAINT `tasks_for_chat_ibfk_1` FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `tasks_for_task`
--
ALTER TABLE `tasks_for_task`
  ADD CONSTRAINT `tasks_for_task_ibfk_1` FOREIGN KEY (`admin`) REFERENCES `auth` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `tasks_for_task_ibfk_2` FOREIGN KEY (`for_task_id`) REFERENCES `tasks_for_chat` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `tasks_for_task_ibfk_3` FOREIGN KEY (`status`) REFERENCES `task_status` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
