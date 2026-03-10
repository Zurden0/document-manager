let login;

async function set_login_to_profile() {
    if (login) {
        document.querySelectorAll(".profile-option").forEach(profile_cont => {
            profile_cont.removeEventListener("click", set_login_path);
        });
        document.querySelectorAll(".profile p").forEach(name => {
            name.innerHTML = login.login;
        });
        document.querySelectorAll(".profile").forEach(profile_cont => {
            profile_cont.addEventListener("click", () => {
                if (confirm("Вы хотете выйти с аккаунта?")) {
                    log_out();
                }
            });
        });
        await unblock_create_new_chat_block();
    }
}

async function log_out() {
    await fetch("./api/session_drop.php", {
        method: "GET",
    });
    location.reload();
}

async function get_login() {
    try {
        const fetch_login = await fetch("./api/get_login.php", {
            method: "GET",
        });

        login = await fetch_login.json();
    } catch (e) {

    }
}

async function unblock_create_new_chat_block() {
    document.querySelector(".create-new-chat").classList.remove("blocked");
    document.querySelector(".my-document").classList.remove("blocked");

    document.querySelector(".create-new-chat .block-button svg").style.display = "none";
    document.querySelector(".my-document .block-button svg").style.display = "none";

}

async function main() {
    await get_login();
    await set_login_to_profile();
}

main().then(r => {});

document.querySelector(".create-new-chat").addEventListener("click", () =>{
    window.location.href = origin_path + "/chats/new.html";
});

document.querySelector(".my-document").addEventListener("click", () => {
    window.location.href = origin_path + "/chats/tasks/view.html";
});