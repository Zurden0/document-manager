const burger_menu_content = document.createElement("div");
burger_menu_content.classList.add("burger-menu");
burger_menu_content.innerHTML = `
<div class="option-cont">
    <div class="option welcome-option active" onclick="history.replaceState({}, '', '../document_manager/index.html?page=welcome');get_current_content();check_sidebar_option()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22"
                  stroke="#14181F" stroke-width="1.5"/>
            <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <p>Главная</p>
    </div>
    <div class="option chat-list-option" onclick="history.replaceState({}, '', '../document_manager/index.html?page=chat-list');get_current_content();check_sidebar_option()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="#14181F" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>Чаты</p>
    </div>
    <div class="resent-chats">
        <div class="option new-chat-option" onclick="history.replaceState({}, '', '../document_manager/index.html?page=new-chat');get_current_content();check_sidebar_option()">
<span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V16M16 12L8 12" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
              stroke="#1E1E1E" stroke-width="1.5"/>
    </svg>
    <p>Создать новый чат</p>
</span>
        </div>
    </div>
    <div class="option view-task-option" onclick="history.replaceState({}, '', '../document_manager/index.html?page=view-task&user_id=' + user_id);get_current_content();check_sidebar_option()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V10Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22"
                  stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 7H15" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 11H11" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>Мои документы</p>
    </div>
</div>
<div class="profile">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#FFFFFF" stroke-width="1.5"/>
        <path d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z"
              stroke="#FFFFFF" stroke-width="1.5"/>
        <path d="M5.49994 19.0001L6.06034 18.0194C6.95055 16.4616 8.60727 15.5001 10.4016 15.5001H13.5983C15.3926 15.5001 17.0493 16.4616 17.9395 18.0194L18.4999 19.0001"
              stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p>Войти в систему</p>
</div>`;

let resents_chat = [];
async function select_sidebar_option(classname) {
    const sidebar = document.querySelector(".sidebar");
    const burger_menu = document.querySelector(".burger-menu");

    try {
        sidebar.querySelector(".option-cont .active").classList.remove("active");
        burger_menu.querySelector(".option-cont .active").classList.remove("active");
    } catch (e) {}


    sidebar.querySelector("." + classname).classList.add("active");
    burger_menu.querySelector("." + classname).classList.add("active");
}

async function set_login_to_profile(div) {
    if (!login) login = await get_login();

    div.querySelector(".profile p").innerHTML = login;
}

async function log_out() {
    if (confirm("Вы уверены что хотите завершить сессию?")) {
        await fetch("/api/session_drop.php", {
            method: "GET",
        });
        location.reload();
    }
}

async function del_recent_chat(chat_id) {
    await fetch("/api/delete_chat_from_resent.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({chat_id: chat_id})
    });
    document.querySelectorAll(`[onclick='del_recent_chat(${chat_id}).then(r => {})']`).forEach(e => {
        e.parentElement.remove();
    });
    const params = new URLSearchParams(window.location.search);
    if (params.get("id") === chat_id.toString()) {
        window.location.href = origin_path + "/chats.html";
    }
}

async function get_resent_chat() {
    if (user_id) {
        let response = await fetch("/api/get_resent_chat.php", {
            method: "GET"
        });
        return await response.json();
    }
    return [];
}

async function create_resents_chat(div) {
    await set_login_to_profile(div);
    div.querySelector(".resent-chats").innerHTML = `
    <div class="option new-chat-option" onclick="history.replaceState({}, '', '../document_manager/index.html?page=new-chat');get_current_content();check_sidebar_option()">
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V16M16 12L8 12" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                      stroke="#1E1E1E" stroke-width="1.5"/>
            </svg>
            <p>Создать новый чат</p>
        </span>
    </div>`;
    resents_chat.forEach(element_of_resent_chat => {
        let new_resent_chat_row = document.createElement("div");
        new_resent_chat_row.classList = "option person-chat-" + element_of_resent_chat.chat_id;
        if (element_of_resent_chat.is_corporate_chat === '0') {
            new_resent_chat_row.innerHTML = `
                <span>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.85164 16.1267C5.37792 17.0042 1.51392 18.796 3.86736 21.0381C5.01699 22.1334 6.29739 22.9167 7.90715 22.9167H17.0928C18.7026 22.9167 19.983 22.1334 21.1326 21.0381C23.4861 18.796 19.6221 17.0042 18.1484 16.1267C14.6925 14.0689 10.3075 14.0689 6.85164 16.1267Z" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.1875 6.77087C17.1875 9.35971 15.0888 11.4584 12.5 11.4584C9.91117 11.4584 7.8125 9.35971 7.8125 6.77087C7.8125 4.18204 9.91117 2.08337 12.5 2.08337C15.0888 2.08337 17.1875 4.18204 17.1875 6.77087Z" stroke="#14181F" stroke-width="1.5"/>
                    </svg>                                       
                    <p>${element_of_resent_chat.name}</p>
                </span>
                <svg style="padding: 5px" onclick="del_recent_chat(${element_of_resent_chat.chat_id}).then(r => {})" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6243 15.625L9.375 9.375M9.37567 15.625L15.625 9.375" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.9166 12.5C22.9166 6.74699 18.2529 2.08329 12.4999 2.08329C6.74695 2.08329 2.08325 6.74699 2.08325 12.5C2.08325 18.2529 6.74695 22.9166 12.4999 22.9166C18.2529 22.9166 22.9166 18.2529 22.9166 12.5Z" stroke="#1E1E1E" stroke-width="1.5"/>
                </svg>`;
        }
        if (element_of_resent_chat.is_corporate_chat === '1') {
            new_resent_chat_row.innerHTML = `
                <span>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6396 18.75C22.4202 18.75 23.041 18.2588 23.5984 17.572C24.7395 16.1661 22.866 15.0425 22.1514 14.4923C21.425 13.9329 20.614 13.6161 19.7917 13.5417M18.75 11.4583C20.1882 11.4583 21.3542 10.2924 21.3542 8.85417C21.3542 7.41593 20.1882 6.25 18.75 6.25" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3.36033 18.75C2.57981 18.75 1.95899 18.2588 1.40157 17.572C0.260468 16.1661 2.13399 15.0425 2.84855 14.4923C3.57493 13.9329 4.38598 13.6161 5.20829 13.5417M5.72913 11.4583C4.29088 11.4583 3.12496 10.2924 3.12496 8.85417C3.12496 7.41593 4.29088 6.25 5.72913 6.25" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M8.42059 15.7409C7.35624 16.399 4.56557 17.7428 6.26527 19.4244C7.09556 20.2459 8.02029 20.8334 9.1829 20.8334H15.817C16.9796 20.8334 17.9044 20.2459 18.7346 19.4244C20.4343 17.7428 17.6437 16.399 16.5793 15.7409C14.0834 14.1975 10.9165 14.1975 8.42059 15.7409Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.1458 7.81246C16.1458 9.826 14.5135 11.4583 12.5 11.4583C10.4864 11.4583 8.85413 9.826 8.85413 7.81246C8.85413 5.79892 10.4864 4.16663 12.5 4.16663C14.5135 4.16663 16.1458 5.79892 16.1458 7.81246Z" stroke="#1E1E1E" stroke-width="1.5"/>
                    </svg>                                        
                    <p>${element_of_resent_chat.name}</p>
                </span>
                <svg style="padding: 5px" onclick="del_recent_chat(${element_of_resent_chat.chat_id}).then(r => {})" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6243 15.625L9.375 9.375M9.37567 15.625L15.625 9.375" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.9166 12.5C22.9166 6.74699 18.2529 2.08329 12.4999 2.08329C6.74695 2.08329 2.08325 6.74699 2.08325 12.5C2.08325 18.2529 6.74695 22.9166 12.4999 22.9166C18.2529 22.9166 22.9166 18.2529 22.9166 12.5Z" stroke="#1E1E1E" stroke-width="1.5"/>
                </svg>`;
        }

        new_resent_chat_row.querySelector("span").addEventListener("click", async () => {
            current_chat_id = element_of_resent_chat.chat_id;
            history.replaceState({}, '', "../document_manager/index.html?page=view-chat&id=" + element_of_resent_chat.chat_id);
            await get_current_content();
            await sidebar_main_function();
            await check_sidebar_option();
        });
        div.querySelector(".resent-chats").append(new_resent_chat_row);
    });
}

async function check_sidebar_option() {
    const url = new URL(window.location.href);
    current_page = url.searchParams.get("page");

    if (current_page === "view-chat") {
        await select_sidebar_option("person-chat-" + url.searchParams.get("id"));
    } else if (current_page === "view-task-for-task" || current_page === "view-task") {
        await select_sidebar_option("person-chat-" + url.searchParams.get("chat_id"));
    } else {
        await select_sidebar_option(current_page + "-option");
    }
}

async function sidebar_main_function() {
    if (!user_id) user_id = await get_user_id();
    login = await get_login();
    resents_chat = await get_resent_chat();

    await create_resents_chat(document.querySelector(".sidebar"));
    await create_resents_chat(document.querySelector(".burger-menu"));

    await check_sidebar_option();
}