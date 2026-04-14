const new_chat_content = `
<div class="title">
    <h1>Создание чата</h1>
    <p>Создайте свой новый чат для себя или коллектива.</p>
</div>
<div class="create-new-chat-general-info">
    <h2>1 Общая информация</h2>
    <div class="input-cont">
        <label>Название чата</label>
        <input id="new-chat-name-input" type="text" name="new-chat-name">
    </div>
    <div class="input-cont2">
        <label>Описание для чата</label>
        <textarea id="new-chat-description-input" type="text" name="new-chat-description"></textarea>
        <p class="counter">0 / 225</p>
    </div>
</div>
<div class="create-new-chat-users-info">
    <h2>2 Список участников</h2>
    <div class="input-cont">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5834 14.5834L18.3334 18.3334" stroke="#14181F" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M16.6666 9.16675C16.6666 5.02461 13.3088 1.66675 9.16663 1.66675C5.02449 1.66675 1.66663 5.02461 1.66663 9.16675C1.66663 13.3089 5.02449 16.6667 9.16663 16.6667C13.3088 16.6667 16.6666 13.3089 16.6666 9.16675Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <label>Поиск участников</label>
        <input id="new-chat-search-user-input" type="text">
        <div class="person-list-cont">

        </div>
    </div>
    <div class="selected-people-cont">
    </div>
    <div class="checkbox-cont">
        <div class="checkbox">
            <input type="checkbox" id="corporate-checkbox" class="corporate-checkbox">
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 1.5L7.6152 13.1039C7.43106 13.3201 7.10409 13.3397 6.89544 13.1471L1.5 8.16667"
                      stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </div>
        <label>Корпоративный чат</label>
    </div>
</div>
<button class="create-new-chat-button">
    <p>Создать чат</p>
</button>`;
const new_chat_path = `
<div class="path">
    <div class="path2">
        <a onclick="history.replaceState({}, '', '../document-manager/index.html?page=chat-list');get_current_content()">Чаты</a>
        <p class="slash"> / </p>
        <p>Создание чата</p>
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

let users = {};
let selected_users = [];
async function get_inputs() {
    const corporate_checkbox = document.querySelector(".create-new-chat-users-info .corporate-checkbox");
    const chat_name_input_cont = document.querySelector(".create-new-chat-general-info .input-cont");
    const description_input_cont = document.querySelector(".create-new-chat-general-info .input-cont2");
    const search_person_input_cont = document.querySelector(".create-new-chat-users-info .input-cont");

    corporate_checkbox.addEventListener("change", () => {
        let checkbox_cont = document.querySelector(".create-new-chat-users-info .checkbox-cont .checkbox");
        let checked_svg = document.querySelector(".create-new-chat-users-info .checkbox-cont .checkbox svg");

        if (corporate_checkbox.checked) {
            checkbox_cont.style.border = "3px solid #3348FF";
            checkbox_cont.style.backgroundColor = "#3544D2";
            checked_svg.style.display = "flex";
        } else {
            checkbox_cont.style.border = "3px solid #B6C1CA";
            checkbox_cont.style.backgroundColor = "#DFDFDF";
            checked_svg.style.display = "none";
        }
    });

    make_label_on_top_when_touch_input(chat_name_input_cont);
    make_label_on_top_when_touch_input(description_input_cont);
    make_label_on_top_when_touch_input(search_person_input_cont);
    document.querySelector(".create-new-chat-button").addEventListener("click", create_new_chat);
}

async function create_search_function() {
    const search_person_input_cont = document.querySelector(".create-new-chat-users-info .input-cont");
    const search_person_input = search_person_input_cont.querySelector("input");

    search_person_input.addEventListener("input", () => {
        if (search_person_input.value) {
            create_person_list();
        } else {
            document.querySelector(".create-new-chat-users-info .input-cont .person-list-cont").style.display = "none";
        }
    });

    search_person_input.addEventListener("blur", () => {
        if (search_person_input.value) return;
        document.querySelector(".create-new-chat-users-info .input-cont .person-list-cont").style.display = "none";
    });
}


function make_label_on_top_when_touch_input(input_and_label_cont) {
    let label = input_and_label_cont.querySelector("label");
    let input = input_and_label_cont.querySelector("input");

    // на случай если нет инпута попробовать найти textarea
    if (!input) {
        input = input_and_label_cont.querySelector("textarea");
    }

    let old_label_padding = getComputedStyle(label).padding;
    let old_input_padding = getComputedStyle(input).padding;
    let old_label_left = getComputedStyle(label).left;

    input.addEventListener("focus", () => {
        label.style.fontSize = "14px";
        label.style.top = "-8px";
        label.style.left = "25px";
        label.style.height = "16px";
        label.style.padding = "0 4px";
    });

    input.addEventListener("blur", () => {
        if (input.value) {
        } else {
            label.style.fontSize = "18px";
            label.style.top = "0";
            label.style.left = old_label_left;
            label.style.height = "100%";
            label.style.padding = old_label_padding;
            input.style.padding = old_input_padding;
        }
    });
}

async function get_all_users() {
    try {
        const fetch_data = await fetch("./../api/get_all_users.php", {
            method: "GET",
        });
        users = await fetch_data.json();
    } catch (e) {
    }
}

function select_user(id, login) {
    selected_users.push({id: id, login: login});
    let selected_people_cont = document.querySelector(".selected-people-cont");
    selected_people_cont.innerHTML = "";

    selected_users.forEach(user => {
        let row = document.createElement("div");
        row.classList.add("row");
        row.innerHTML = `
        <p>${user.login}</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="#14181F" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                  stroke="#14181F" stroke-width="1.5"/>
        </svg>`;
        row.querySelector("svg").addEventListener("click", () => {
            row.style.display = "none";
            selected_users = selected_users.filter(e => e.id !== user.id);
        }, {once: true});
        selected_people_cont.appendChild(row);
    })
}

async function create_person_list() {
    const search_person_input_cont = document.querySelector(".create-new-chat-users-info .input-cont");
    const search_person_input = search_person_input_cont.querySelector("input");
    const person_cont = document.querySelector(".person-list-cont");
    person_cont.innerHTML = "";

    let sorted_users = users.filter(user => user.login.toLowerCase().includes(search_person_input.value));
    sorted_users = sorted_users.filter(all_user => !selected_users.some(selected_user => selected_user.id === all_user.id));
    sorted_users = sorted_users.filter(user => user.id !== user_id);
    if (sorted_users === {} || !search_person_input.value) {
        person_cont.style.display = "none";
    } else {
        person_cont.style.display = "flex";
    }

    sorted_users.forEach(user_data => {
        let login = document.createElement("p");
        login.innerHTML = user_data.login;
        login.addEventListener("click", () => {
            search_person_input.value = "";
            person_cont.style.display = "none";
            select_user(user_data.id, user_data.login);
        });
        person_cont.appendChild(login);
    });
}

async function create_new_chat() {
    const corporate_checkbox = document.querySelector(".create-new-chat-users-info .corporate-checkbox");
    const chat_name_input_cont = document.querySelector(".create-new-chat-general-info .input-cont");
    const description_input_cont = document.querySelector(".create-new-chat-general-info .input-cont2");

    let chat_name = chat_name_input_cont.querySelector("input").value;
    let description = description_input_cont.querySelector("textarea").value;
    let is_corporate_chat = corporate_checkbox.checked;

    if (!chat_name) {
        alert("Название чата не может быть пустым!");
        return
    }

    if (!description) {
        description = "Описания  еще нет...";
    }

    const data = {
        name: chat_name,
        description: description,
        is_corporate_chat: is_corporate_chat,
        selected_users: selected_users
    };

    let fetch_data = await fetch("/api/create_new_chat.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const chat_id = await fetch_data.json();
    console.log(chat_id);
    history.pushState({}, "", "../document_manager/index.html?page=view-chat&id=" + chat_id);
    await get_current_content();
}


async function new_chat_main_function() {
    await get_all_users();
    await get_inputs();
    await create_search_function();
    await create_person_list();
}
