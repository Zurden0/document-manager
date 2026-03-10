let search_new_person_input = document.getElementById("new-chat-search-user-input");

search_new_person_input.addEventListener("input", () => {
    if (search_new_person_input.value) {
        create_person_list().then(r => {});
    } else {
        document.querySelector(".create-new-chat-users-info .input-cont .person-list-cont").style.display = "none";
    }
});

search_new_person_input.addEventListener("blur", () => {
    if (search_new_person_input.value) return;
    document.querySelector(".create-new-chat-users-info .input-cont .person-list-cont").style.display = "none";
});


let corporate_checkbox = document.getElementById("corporate-checkbox");

corporate_checkbox.addEventListener("change", () => {
    let checkbox_cont = document.querySelector(".create-new-chat-users-info .checkbox-cont .checkbox");
    let checked_svg = document.querySelector(".create-new-chat-users-info .checkbox-cont .checkbox svg");

    if (corporate_checkbox.checked) {
        checkbox_cont.style.border = "3px solid #3348FF";
        checkbox_cont.style.backgroundColor = "#3544D2";
        checked_svg.style.display = "flex"
    } else {
        checkbox_cont.style.border = "3px solid #B6C1CA";
        checkbox_cont.style.backgroundColor = "#DFDFDF";
        checked_svg.style.display = "none"
    }
});


let input = document.getElementById("new-chat-name-input");
let label = document.querySelector(".create-new-chat-general-info .input-cont label");

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
        label.style.left = "18px";
        label.style.height = "100%";
        label.style.padding = "0";
    }
});

let input2 = document.getElementById("new-chat-description-input");
let label2 = document.querySelector(".create-new-chat-general-info .input-cont2 label");

input2.addEventListener("focus", () => {
    label2.style.fontSize = "14px";
    label2.style.top = "-8px";
    label2.style.left = "25px";
    label2.style.height = "16px";
    label2.style.padding = "0 4px";
});

input2.addEventListener("blur", () => {
    if (input2.value) {
    } else {
        label2.style.fontSize = "18px";
        label2.style.top = "0";
        label2.style.left = "4px";
        label2.style.height = "100%";
        label2.style.padding = "14px";
    }
});

input2.addEventListener("input", () => {
    let counter = document.querySelector(".create-new-chat-general-info .counter");
    let value = input2.value;

    if (value.length > 225) {
        let new_value = "";
        for (let i = 0; i < 225; i++) {
            new_value += value[i];
        }
        input2.value = new_value;
        value = new_value;
    }

    counter.innerHTML = value.length + " / 225";
})

let input3 = document.getElementById("new-chat-search-user-input");
let label3 = document.querySelector(".create-new-chat-users-info .input-cont label");

input3.addEventListener("focus", () => {
    label3.style.fontSize = "14px";
    label3.style.top = "-8px";
    label3.style.left = "34px";
    label3.style.height = "16px";
    label3.style.padding = "0 4px";
});

input3.addEventListener("blur", () => {
    if (input3.value) {
    } else {
        label3.style.fontSize = "18px";
        label3.style.top = "0";
        label3.style.left = "44px";
        label3.style.height = "100%";
        label3.style.padding = "0";
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
        await create_person_list()
    } catch (e) {
    }
}

async function select_user(id, login) {
    selected_users.push({id:id, login:login});
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
        row.querySelector("svg").addEventListener("click", ()=> {
            row.style.display = "none";
            selected_users = selected_users.filter(e => e.id !== user.id);
        }, {once:true});
        selected_people_cont.appendChild(row);
    })
}

async function create_person_list() {
    let person_cont = document.querySelector(".person-list-cont");
    person_cont.innerHTML = "";
    let sorted_users = users.filter(user => user.login.toLowerCase().includes(search_new_person_input.value));
    sorted_users = sorted_users.filter(all_user => !selected_users.some(selected_user => selected_user.id === all_user.id));
    if (sorted_users === {} || !search_new_person_input.value) {
        person_cont.style.display = "none";
    } else {
        person_cont.style.display = "flex";
    }

    sorted_users.forEach(user_data => {
        let login = document.createElement("p");
        login.innerHTML = user_data.login;
        login.addEventListener("click", () => {
            search_new_person_input.value = "";
            person_cont.style.display = "none";
            select_user(user_data.id, user_data.login);
        });
        person_cont.appendChild(login);
    });
}

async function main() {
    await get_all_users();
}

main().then(r => {
});

document.querySelector(".create-new-chat-button",).addEventListener("click", () => {

})