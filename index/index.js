function index_main_script() {
    if (window.location.href.split(origin_path)[1].split("?")[0] === "/index.html") {
        history.replaceState({}, '', origin_path + '/welcome.html');
        location.reload()
    }
}

index_main_script();