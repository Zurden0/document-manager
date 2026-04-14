const view_chat_content = `
<div class="chat-view-block-cont">
    <div>
        <div class="block create-new-document">
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.669 15.57L55.0495 11.1895C57.4688 8.77018 61.3912 8.77018 63.8105 11.1895C66.2298 13.6087 66.2298 17.5312 63.8105 19.9505L59.43 24.331M50.669 15.57L34.3132 31.9258C31.0466 35.1923 29.4133 36.8257 28.3012 38.816C27.189 40.8063 26.07 45.506 25 50C29.494 48.93 34.1937 47.811 36.184 46.6988C38.1743 45.5867 39.8076 43.9534 43.0742 40.6868L59.43 24.331M50.669 15.57L59.43 24.331"
                      stroke="#6F7C8E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M65.625 37.5C65.625 50.7583 65.625 57.3874 61.5062 61.5062C57.3874 65.625 50.7583 65.625 37.5 65.625C24.2417 65.625 17.6126 65.625 13.4938 61.5062C9.375 57.3874 9.375 50.7583 9.375 37.5C9.375 24.2417 9.375 17.6126 13.4938 13.4938C17.6126 9.375 24.2417 9.375 37.5 9.375"
                      stroke="#6F7C8E" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <p class="block-title">Добавить новую задачу</p>
            <p>Создать новую задачу для чата.</p>
            <button onclick="create_new_task_for_chat()">
                <p>Добавить задачу</p>
            </button>
        </div>
    </div>
    <div class="block chat-document-list">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.0625 52.9018V31.25C64.0625 19.4649 64.0625 13.5723 60.4013 9.91117C56.7402 6.25 50.8476 6.25 39.0625 6.25H35.9375C24.1524 6.25 18.2598 6.25 14.5987 9.91117C10.9375 13.5723 10.9375 19.4649 10.9375 31.25V60.9375"
                  stroke="#E5AFB0" stroke-width="4" stroke-linecap="round"/>
            <path d="M64.0625 53.125H18.75C14.4353 53.125 10.9375 56.6228 10.9375 60.9375C10.9375 65.2522 14.4353 68.75 18.75 68.75H64.0625"
                  stroke="#E5AFB0" stroke-width="4" stroke-linecap="round"/>
            <path d="M64.0625 68.75C59.7478 68.75 56.25 65.2522 56.25 60.9375C56.25 56.6228 59.7478 53.125 64.0625 53.125"
                  stroke="#E5AFB0" stroke-width="4" stroke-linecap="round"/>
            <path d="M46.875 21.875L28.125 21.875" stroke="#E5AFB0" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M37.5 34.375L28.125 34.375" stroke="#E5AFB0" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </svg>
        <p class="block-title">Список задач группы</p>
        <p>Просмотр списка задач у группы.</p>
        <button class="block-button" onclick="history.replaceState({}, '', '../document_manager/index.html?page=view-task&chat_id=' + current_chat_id);get_current_content()">
            <p>Посмотреть задачи</p>
        </button>
    </div>
    <div class="block person-edit blocked">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.1753 62.5H59.7071C63.3004 62.5 66.1585 60.8628 68.7246 58.5736C75.2439 52.7581 59.9191 46.875 54.6875 46.875M48.4375 15.8399C49.1471 15.6992 49.884 15.625 50.6399 15.625C56.3271 15.625 60.9375 19.8223 60.9375 25C60.9375 30.1777 56.3271 34.375 50.6399 34.375C49.884 34.375 49.1471 34.3008 48.4375 34.1601"
                  stroke="#70C4B3" stroke-width="4" stroke-linecap="round"/>
            <path d="M14.0041 50.3475C10.3198 52.3219 0.659804 56.3534 6.54339 61.3982C9.41747 63.8625 12.6185 65.625 16.6429 65.625H39.6071C43.6315 65.625 46.8325 63.8625 49.7066 61.3982C55.5902 56.3534 45.9302 52.3219 42.2459 50.3475C33.6063 45.7175 22.6437 45.7175 14.0041 50.3475Z"
                  stroke="#70C4B3" stroke-width="4"/>
            <path d="M40.625 23.4375C40.625 30.3411 35.0286 35.9375 28.125 35.9375C21.2214 35.9375 15.625 30.3411 15.625 23.4375C15.625 16.5339 21.2214 10.9375 28.125 10.9375C35.0286 10.9375 40.625 16.5339 40.625 23.4375Z"
                  stroke="#70C4B3" stroke-width="4"/>
        </svg>
        <p class="block-title">Управление участниками группы</p>
        <p>Просмотр и редактирование списка участников.</p>
        <button class="block-button" onclick="">
            <p>Управление группой</p>
        </button>
    </div>
</div>`;
const view_chat_path = `
<div class="path">
    <div class="path2">
        <a onclick="history.replaceState({}, '', '../document-manager/index.html?page=chat-list');get_current_content()">Чаты</a>
        <p class="slash"> / </p>
        <p class="chat_name">Название чата</p>
    </div>
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

async function set_chat_name() {
    const url = new URL(window.location.href);
    let chat_name = await get_chat_name(url.searchParams.get("id"))
    document.querySelector(".path .chat_name").innerHTML = chat_name.name;
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

async function view_chat_main_function() {
    await set_chat_name();
}
