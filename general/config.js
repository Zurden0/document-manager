

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




