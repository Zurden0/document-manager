let chats;
let current_chat_id;
let current_chat_name;
const chat_list_content = `
<div class="title">
    <h1>Список чатов</h1>
    <p>Все чаты в которых вы присутствуете или создали.</p>
</div>
<div class="search-cont">
    <label>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5834 14.5833L18.3334 18.3333" stroke="#14181F" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M16.6667 9.16667C16.6667 5.02453 13.3089 1.66667 9.16675 1.66667C5.02461 1.66667 1.66675 5.02453 1.66675 9.16667C1.66675 13.3088 5.02461 16.6667 9.16675 16.6667C13.3089 16.6667 16.6667 13.3088 16.6667 9.16667Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <input type="text" placeholder="Поиск чата">
    </label>
    <button>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3.33333V16.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M3.33334 10H16.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </svg>
        <p>Создать новый чат</p>
    </button>
</div>
<div class="chat-table">
    <div class="first-row">
        <p>Название</p>
        <p>Последняя активность</p>
    </div>
</div>`;
const chat_list_path = `
<div class="path">
    <p>Чаты</p>
    <svg onclick="document.querySelector('.burger-menu').classList.toggle('active')" width="24" height="24"
         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z"
              fill="#14181F"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z"
              fill="#14181F"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z"
              fill="#14181F"/>
    </svg>
    ${burger_menu_content.outerHTML}
</div>`;

async function create_chats() {
    document.querySelector(".chat-table").innerHTML = "";
    chats.forEach(chat_data => {
        let row = document.createElement("div");
        let svg;
        row.classList.add("row");

        if (chat_data.is_corporate_chat === "0") {
            svg = `
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.22197 19.352C6.45351 20.405 1.81671 22.5551 4.64083 25.2457C6.02039 26.56 7.55686 27.5 9.48859 27.5H20.5114C22.4431 27.5 23.9796 26.56 25.3592 25.2457C28.1833 22.5551 23.5465 20.405 21.778 19.352C17.631 16.8827 12.369 16.8827 8.22197 19.352Z"
                          stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.625 8.125C20.625 11.2316 18.1066 13.75 15 13.75C11.8934 13.75 9.375 11.2316 9.375 8.125C9.375 5.0184 11.8934 2.5 15 2.5C18.1066 2.5 20.625 5.0184 20.625 8.125Z"
                          stroke="#14181F" stroke-width="1.5"/>
                </svg>`;
        } else {
            svg = `
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" fill="none"/>
                    <path d="M25.9674 22.5C26.9041 22.5 27.649 21.9106 28.3179 21.0864C29.6873 19.3993 27.439 18.051 26.5816 17.3908C25.7099 16.7195 24.7366 16.3393 23.7499 16.25M22.4999 13.75C24.2258 13.75 25.6249 12.3509 25.6249 10.625C25.6249 8.89911 24.2258 7.5 22.4999 7.5"
                          stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M4.03232 22.5C3.0957 22.5 2.35071 21.9106 1.68181 21.0864C0.312489 19.3993 2.56072 18.051 3.41818 17.3908C4.28985 16.7195 5.26311 16.3393 6.24988 16.25M6.87488 13.75C5.14899 13.75 3.74988 12.3509 3.74988 10.625C3.74988 8.89911 5.14899 7.5 6.87488 7.5"
                          stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M10.1046 18.889C8.82741 19.6787 5.47861 21.2914 7.51825 23.3093C8.5146 24.295 9.62428 25 11.0194 25H18.9803C20.3755 25 21.4852 24.295 22.4815 23.3093C24.5211 21.2914 21.1723 19.6787 19.8951 18.889C16.9001 17.037 13.0997 17.037 10.1046 18.889Z"
                          stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.3749 9.375C19.3749 11.7912 17.4161 13.75 14.9999 13.75C12.5836 13.75 10.6249 11.7912 10.6249 9.375C10.6249 6.95875 12.5836 5 14.9999 5C17.4161 5 19.3749 6.95875 19.3749 9.375Z"
                          stroke="#1E1E1E" stroke-width="1.5"/>
                </svg>`;
        }
        row.innerHTML = `
        <div class="info-cont">
            ${svg}
            <div class="title">
                <h2>${chat_data.name}</h2>
                <p>во главе ${chat_data.login}</p>
            </div>
        </div>
        <div class="last-activity-cont">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#14181F" stroke-width="1.5"/>
                <path d="M12.0083 10.5083C11.1799 10.5083 10.5083 11.1799 10.5083 12.0083C10.5083 12.8367 11.1799 13.5083 12.0083 13.5083C12.8367 13.5083 13.5083 12.8367 13.5083 12.0083C13.5083 11.1799 12.8367 10.5083 12.0083 10.5083ZM12.0083 10.5083V6.99915M15.0152 15.0199L13.0666 13.0713"
                      stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Никогда</p>
        </div>`;

        row.addEventListener("click", async () => {
            await fetch("/api/add_chat_to_resent.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({chat_id: chat_data.id})
            });
            history.pushState({}, "", "../document_manager/index.html?page=view-chat&id=" + chat_data.id);
            await get_current_content();
        });
        document.querySelector(".chat-table").appendChild(row);
    });
}

async function create_new_chat_button_listener() {
    document.querySelector(".search-cont button").addEventListener("click",  async () => {
        history.replaceState({}, '', origin_path + '/index.html?page=new-chat');
        await get_current_content();
    });
}

async function get_all_chats() {
    let fetch_data = await fetch("/api/get_all_chats.php", {
        method: "GET"
    });

    chats = await fetch_data.json();
}

async function chat_list_main_function() {
    await get_all_chats();

    await Promise.all([
        create_chats(),
        create_new_chat_button_listener()
    ])
}
