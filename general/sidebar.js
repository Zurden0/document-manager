let resents_chat = [
    {id: 1, name: "Название", type: 1},
    {id: 2, name: "Название", type: 2},
];

async function get_resents_chat() {

    await create_resents_chat();
    await set_active();
}

function del_recent_chat(id) {
}

async function create_resents_chat() {
    resents_chat.forEach(element_of_resent_chat => {
        let new_resent_chat_row = document.createElement("div");
        new_resent_chat_row.classList = "option";
        new_resent_chat_row.onclick = `window.location.href = '/chats/view?id=${element_of_resent_chat.id}'`;
        if (element_of_resent_chat.type === 1) {
            new_resent_chat_row.innerHTML = `
                <span>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.85164 16.1267C5.37792 17.0042 1.51392 18.796 3.86736 21.0381C5.01699 22.1334 6.29739 22.9167 7.90715 22.9167H17.0928C18.7026 22.9167 19.983 22.1334 21.1326 21.0381C23.4861 18.796 19.6221 17.0042 18.1484 16.1267C14.6925 14.0689 10.3075 14.0689 6.85164 16.1267Z" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.1875 6.77087C17.1875 9.35971 15.0888 11.4584 12.5 11.4584C9.91117 11.4584 7.8125 9.35971 7.8125 6.77087C7.8125 4.18204 9.91117 2.08337 12.5 2.08337C15.0888 2.08337 17.1875 4.18204 17.1875 6.77087Z" stroke="#14181F" stroke-width="1.5"/>
                    </svg>                                       
                    <p>${element_of_resent_chat.name}</p>
                </span>
                <svg onclick="del_recent_chat(${element_of_resent_chat.id})" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6243 15.625L9.375 9.375M9.37567 15.625L15.625 9.375" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.9166 12.5C22.9166 6.74699 18.2529 2.08329 12.4999 2.08329C6.74695 2.08329 2.08325 6.74699 2.08325 12.5C2.08325 18.2529 6.74695 22.9166 12.4999 22.9166C18.2529 22.9166 22.9166 18.2529 22.9166 12.5Z" stroke="#1E1E1E" stroke-width="1.5"/>
                </svg>    
            `;
        }
        if (element_of_resent_chat.type === 2) {
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
                <svg onclick="del_recent_chat(${element_of_resent_chat.id})" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6243 15.625L9.375 9.375M9.37567 15.625L15.625 9.375" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.9166 12.5C22.9166 6.74699 18.2529 2.08329 12.4999 2.08329C6.74695 2.08329 2.08325 6.74699 2.08325 12.5C2.08325 18.2529 6.74695 22.9166 12.4999 22.9166C18.2529 22.9166 22.9166 18.2529 22.9166 12.5Z" stroke="#1E1E1E" stroke-width="1.5"/>
                </svg>    
            `;
        }

        document.querySelectorAll(".resent-chats").forEach(e => {
            e.append(new_resent_chat_row.cloneNode(true));
        });
    });
}

async function set_active() {
    switch (window.location.pathname.split("/")[2]) {
        case "welcome.html":
            document.querySelector(".welcome-option").classList.add("active");
            break

        case "notification.html":
            document.querySelector(".notification-option").classList.add("active");
            break

        case "chats.html":
            document.querySelector(".chats-option").classList.add("active");
            break

        case "chats":
            switch (window.location.pathname.split("/")[3]) {
                case "new.html":
                    document.querySelector(".new-chat-option").classList.add("active");
                    break

                case "tasks":
                    if (window.location.pathname.split("/")[4]) {
                        if (!window.location.search) {
                            document.querySelector(".my-document-option").classList.add("active")
                        }
                    }
                    break
            }
            break
    }
}


get_resents_chat().then(r => {
});

const origin_path = "/" + window.location.pathname.split("/")[1];

document.querySelector(".welcome-option").addEventListener("click", () => {
    window.location.href = origin_path + "/welcome.html";
});

document.querySelector(".chats-option").addEventListener("click", () => {
    window.location.href = origin_path + "/chats.html";
});

document.querySelector(".notification-option").addEventListener("click", () => {
    window.location.href = origin_path + "/notification.html";
});

document.querySelector(".my-document-option").addEventListener("click", () => {
    window.location.href = origin_path + "/chats/tasks/view.html";
});

function set_login_path() {
    window.location.href = origin_path + "/login.html";
}

document.querySelectorAll(".profile-option").forEach(option => {
    option.addEventListener("click", set_login_path);
});

