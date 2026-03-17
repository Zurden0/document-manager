let corporate_checkbox = document.querySelector(".create-new-chat-users-info .corporate-checkbox");
let chat_name_input_cont = document.querySelector(".create-new-chat-general-info .input-cont");
let description_input_cont = document.querySelector(".create-new-chat-general-info .input-cont2");
let search_person_input_cont = document.querySelector(".create-new-chat-users-info .input-cont");

let search_person_input = search_person_input_cont.querySelector("input");

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

make_label_on_top_when_touch_input(chat_name_input_cont);
make_label_on_top_when_touch_input(description_input_cont);
make_label_on_top_when_touch_input(search_person_input_cont);


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


let users = {};
let selected_users = [];

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
function create_person_list() {
    let person_cont = document.querySelector(".person-list-cont");
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
    let status = await fetch_data.json();
    alert(status["status"]);
}


document.querySelector(".create-new-chat-button").addEventListener("click", create_new_chat);

async function main() {
    await get_all_users();
    create_person_list();
}

main().then(r => {
});
