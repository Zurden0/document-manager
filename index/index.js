let user_id;
let login;
let url = new URL(window.location.href);
let current_page;
const html_parser = new DOMParser();

async function get_current_content() {
    url = new URL(window.location.href);

    if (url.searchParams.has("page")) {
        switch (url.searchParams.get("page")) {
            case "welcome":
                await load_page(welcome_path, welcome_content);
                await welcome_main_function();
                break

            case "chat-list":
                await load_page(chat_list_path, chat_list_content);
                await chat_list_main_function();
                break

            case "new-chat":
                await load_page(new_chat_path, new_chat_content);
                await new_chat_main_function();
                break

            case "view-chat":
                await load_page(view_chat_path, view_chat_content);
                await view_chat_main_function();
                break

            case "view-task":
                await load_page(view_task_path, view_task_content);
                await view_task_main_function();
                break

            case "view-task-for-task":
                if (url.searchParams.has("form")) {
                    switch (url.searchParams.get("form")) {
                        case "new":
                            await load_page(task_for_task_path, new_task_for_task_content);
                            break

                        case "edit":
                            await load_page(task_for_task_path, edit_task_for_task_content);
                            break

                        case "view":
                            await load_page(task_for_task_path, view_task_for_task_content);
                            break

                    }
                }
                await task_for_task_main_function();
                break
        }
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

    await get_current_content();
    await sidebar_main_function();
}

index_main_script().then(r => {
});