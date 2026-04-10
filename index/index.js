let user_id;
let login;
let url = new URL(window.location.href);

async function get_current_content() {
    url = new URL(window.location.href);

    if (url.searchParams.has("page")) {
        switch (url.searchParams.get("page")) {
            case "welcome":
                await load_page(welcome_path, welcome_content);
                if (!user_id) user_id = await get_user_id();
                await welcome_main_function();
                break

            case "chat-list":
                await load_page(chat_list_path, chat_list_content);
                if (!user_id) user_id = await get_user_id();
                await chat_list_main_function();
                break

            case "new-chat":
                await load_page(new_chat_path, new_chat_content);
                if (!user_id) user_id = await get_user_id();
                await new_chat_main_function();
                break

            case "view-chat":
                await load_page(view_chat_path, view_chat_content);
                if (!user_id) user_id = await get_user_id();
                await view_chat_main_script();
                break

            case "view-task":
                await load_page(view_task_path, view_task_content);
                break
        }

        return url.searchParams.get("page")
    }
}

async function load_page(path, content) {
    const right_side = document.querySelector(".right-side");
    right_side.innerHTML = path;
    right_side.insertAdjacentHTML("beforeend", content);
}

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

async function index_main_script() {
    if (!url.searchParams.has("page")) history.replaceState({}, '', '../document_manager/index.html?page=welcome');

    const current_page = await get_current_content();
    await sidebar_main_function();

    if (current_page === "view-chat") {
        await select_sidebar_option("person-chat-" + url.searchParams.get("id"));
    } else {
        await select_sidebar_option(current_page + "-option");
    }
}

index_main_script().then(r => {
});