async function get_user_id() {
    let response = await fetch("/api/get_user_id.php", {
        method:"GET"
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

async function get_resent_chat() {
    if (user_id) {
        let response = await fetch("/api/.php", {
            method: "GET",
        });
        return await response.json();
    } else {
        return [];
    }
}

function get_origin_path() {
    if (window.location.host.split(":")[0] === "localhost") {
        return window.location.origin + "/document_manager";
    } else {
        return window.location.origin;
    }
}

let user_id;
let login;
let origin_path = get_origin_path();

async function get_config() {
    user_id = await get_user_id();
    login = await get_login();

}

async function load_scripts() {
    let scripts_status = {};

    try {
        scripts_status["sidebar"] = await start_sidebar_script();
        console.log("Скрипты подключены ->")
    } catch (e) {
        console.log(e);
        console.log("Ошибка загрузки скрипта ->");
    }


    return scripts_status;
}

get_config().then(() => {
    console.log("Конфиг загружен.");
    load_scripts().then(scripts_status => {
        console.log(scripts_status);
    });
});