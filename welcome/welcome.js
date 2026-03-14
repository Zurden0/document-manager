function unblock_create_new_chat_block() {
    document.querySelector(".create-new-chat").classList.remove("blocked");
    document.querySelector(".my-document").classList.remove("blocked");

    document.querySelector(".create-new-chat .block-button svg").style.display = "none";
    document.querySelector(".my-document .block-button svg").style.display = "none";

}

function main() {
    unblock_create_new_chat_block();
}

main();

document.querySelector(".create-new-chat").addEventListener("click", () =>{
    window.location.href = origin_path + "/chats/new.html";
});

document.querySelector(".my-document").addEventListener("click", () => {
    window.location.href = origin_path + "/chats/tasks/view.html";
});