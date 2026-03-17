async function get_user_id() {
    let response = await fetch("/api/get_user_id.php", {
        method: "GET"
    });
    return Object.values(await response.json())[0];
}

async function get_login() {
    if (user_id) {
        let response = await fetch("/api/get_login.php", {
            method: "GET",
        });
        return Object.values(await response.json())[0];
    } else {
        return "Войти в систему";
    }
}

async function get_chat_name(chat_id) {
    let response = await fetch("/api/get_chat_name.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({chat_id: chat_id})
    });
    return Object.values(await response.json())[0];
}

async function get_resent_chats() {
    let response = await fetch("/api/get_resent_chat.php", {
        method: "GET"
    });
    return await response.json();
}

function get_origin_path() {
    if (window.location.host.split(":")[0] === "localhost") {
        return window.location.origin + "/document_manager";
    } else {
        return window.location.origin;
    }
}

let user_id;
let login;
let origin_path = get_origin_path();
let resents_chat;

async function get_config() {
    user_id = await get_user_id();
    login = await get_login();
    resents_chat = await get_resent_chats();
}
