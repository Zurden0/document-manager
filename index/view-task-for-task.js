const new_task_for_task_content = `
<div class="title">
    <h1>Создание подзадачи</h1>
    <p>Добавление новой подзадачи для участников чата.</p>
</div>
<div class="create-new-document-general-info">
    <h2>1 Общая информация</h2>
    <div class="input-cont">
        <label>Название подзадачи</label>
        <input id="new-document-name-input" type="text" name="new-document-name">
    </div>
    <div class="input-cont2">
        <label>Комментарий ответственому</label>
        <textarea id="new-document-description-input" type="text" name="new-document-description"></textarea>
        <p class="counter">0 / 225</p>
    </div>
    <div class="input-cont4">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0525 21.8747H10.9448C6.76745 21.8747 4.67878 21.8747 3.38105 20.2644C2.08331 18.6542 2.08331 16.0626 2.08331 10.8793V7.51942C2.08331 5.52214 2.08331 4.5235 2.42033 3.77417C2.66057 3.24001 3.01578 2.79927 3.44627 2.50118C4.05018 2.08301 4.85501 2.08301 6.46467 2.08301C7.49593 2.08301 8.01155 2.08301 8.46292 2.29303C9.49349 2.77255 9.91845 3.93416 10.3835 5.08818L10.9448 6.48116M7.29595 6.48116H16.1965C18.0634 6.48116 18.9968 6.48116 19.6673 7.03707C19.9576 7.27773 20.2068 7.58698 20.4008 7.94716C20.7028 8.50805 20.8012 9.2172 20.8333 10.3295"
                  stroke="#5B6574" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M4.78709 13.0993C5.23638 11.9023 5.46103 11.3038 5.89945 10.9279C6.60715 10.3212 7.62463 10.4229 8.49656 10.4229H17.9712C20.5513 10.4229 21.8413 10.4229 22.485 11.253C23.59 12.6781 22.2864 14.9896 21.7612 16.3886C20.8198 18.8967 20.3492 20.1508 19.4116 20.9156C17.9832 22.081 15.9052 21.8577 14.1812 21.8577H10.3513C6.66063 21.8577 4.8153 21.8577 3.85566 20.7151C2.08411 18.6057 3.99033 15.222 4.78709 13.0993Z"
                  stroke="#5B6574" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <label>Добавить файл документа</label>
        <input id="add-new-document-input" type="file">
    </div>
    <div class="input-cont3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5834 14.5834L18.3334 18.3334" stroke="#14181F" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M16.6666 9.16675C16.6666 5.02461 13.3088 1.66675 9.16663 1.66675C5.02449 1.66675 1.66663 5.02461 1.66663 9.16675C1.66663 13.3089 5.02449 16.6667 9.16663 16.6667C13.3088 16.6667 16.6666 13.3089 16.6666 9.16675Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <label>Добавить ответственного</label>
        <input id="new-document-search-user-input" type="text">
    </div>
</div>
<button class="create-new-document-button">
    <p>Добавить подзадачу</p>
</button>`;
const edit_task_for_task_content = `
<div class="title">
    <h1>Редактирование подзадачи</h1>
    <p>Добавление новой подзадачи для участников чата.</p>
</div>
<div class="create-new-document-general-info">
    <h2>1 Общая информация</h2>
    <div class="input-cont">
        <label>Название подзадачи</label>
        <input id="new-document-name-input" type="text" name="new-document-name">
    </div>
    <div class="input-cont2">
        <label>Комментарий ответственому</label>
        <textarea id="new-document-description-input" type="text" name="new-document-description"></textarea>
        <p class="counter">0 / 225</p>
    </div>
    <div class="input-cont4">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0525 21.8747H10.9448C6.76745 21.8747 4.67878 21.8747 3.38105 20.2644C2.08331 18.6542 2.08331 16.0626 2.08331 10.8793V7.51942C2.08331 5.52214 2.08331 4.5235 2.42033 3.77417C2.66057 3.24001 3.01578 2.79927 3.44627 2.50118C4.05018 2.08301 4.85501 2.08301 6.46467 2.08301C7.49593 2.08301 8.01155 2.08301 8.46292 2.29303C9.49349 2.77255 9.91845 3.93416 10.3835 5.08818L10.9448 6.48116M7.29595 6.48116H16.1965C18.0634 6.48116 18.9968 6.48116 19.6673 7.03707C19.9576 7.27773 20.2068 7.58698 20.4008 7.94716C20.7028 8.50805 20.8012 9.2172 20.8333 10.3295"
                  stroke="#5B6574" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M4.78709 13.0993C5.23638 11.9023 5.46103 11.3038 5.89945 10.9279C6.60715 10.3212 7.62463 10.4229 8.49656 10.4229H17.9712C20.5513 10.4229 21.8413 10.4229 22.485 11.253C23.59 12.6781 22.2864 14.9896 21.7612 16.3886C20.8198 18.8967 20.3492 20.1508 19.4116 20.9156C17.9832 22.081 15.9052 21.8577 14.1812 21.8577H10.3513C6.66063 21.8577 4.8153 21.8577 3.85566 20.7151C2.08411 18.6057 3.99033 15.222 4.78709 13.0993Z"
                  stroke="#5B6574" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <label>Добавить файл документа</label>
        <input id="add-new-document-input" type="file">
    </div>
    <div class="input-cont3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5834 14.5834L18.3334 18.3334" stroke="#14181F" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M16.6666 9.16675C16.6666 5.02461 13.3088 1.66675 9.16663 1.66675C5.02449 1.66675 1.66663 5.02461 1.66663 9.16675C1.66663 13.3089 5.02449 16.6667 9.16663 16.6667C13.3088 16.6667 16.6666 13.3089 16.6666 9.16675Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <label>Добавить ответственного</label>
        <input id="new-document-search-user-input" type="text">
    </div>
</div>
<button class="create-new-document-button">
    <p>Добавить подзадачу</p>
</button>`;
const view_task_for_task_content = `
<div class="title">
    <h1>Просмотр подзадачи</h1>
    <p>Добавление новой подзадачи для участников чата.</p>
</div>
<div class="create-new-document-general-info">
    <h2>1 Общая информация</h2>
    <div class="input-cont">
        <label>Название подзадачи</label>
        <input id="new-document-name-input" type="text" name="new-document-name">
    </div>
    <div class="input-cont2">
        <label>Комментарий ответственому</label>
        <textarea id="new-document-description-input" type="text" name="new-document-description"></textarea>
        <p class="counter">0 / 225</p>
    </div>
    <div class="input-cont4">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0525 21.8747H10.9448C6.76745 21.8747 4.67878 21.8747 3.38105 20.2644C2.08331 18.6542 2.08331 16.0626 2.08331 10.8793V7.51942C2.08331 5.52214 2.08331 4.5235 2.42033 3.77417C2.66057 3.24001 3.01578 2.79927 3.44627 2.50118C4.05018 2.08301 4.85501 2.08301 6.46467 2.08301C7.49593 2.08301 8.01155 2.08301 8.46292 2.29303C9.49349 2.77255 9.91845 3.93416 10.3835 5.08818L10.9448 6.48116M7.29595 6.48116H16.1965C18.0634 6.48116 18.9968 6.48116 19.6673 7.03707C19.9576 7.27773 20.2068 7.58698 20.4008 7.94716C20.7028 8.50805 20.8012 9.2172 20.8333 10.3295"
                  stroke="#5B6574" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M4.78709 13.0993C5.23638 11.9023 5.46103 11.3038 5.89945 10.9279C6.60715 10.3212 7.62463 10.4229 8.49656 10.4229H17.9712C20.5513 10.4229 21.8413 10.4229 22.485 11.253C23.59 12.6781 22.2864 14.9896 21.7612 16.3886C20.8198 18.8967 20.3492 20.1508 19.4116 20.9156C17.9832 22.081 15.9052 21.8577 14.1812 21.8577H10.3513C6.66063 21.8577 4.8153 21.8577 3.85566 20.7151C2.08411 18.6057 3.99033 15.222 4.78709 13.0993Z"
                  stroke="#5B6574" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <label>Добавить файл документа</label>
        <input id="add-new-document-input" type="file">
    </div>
    <div class="input-cont3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5834 14.5834L18.3334 18.3334" stroke="#14181F" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M16.6666 9.16675C16.6666 5.02461 13.3088 1.66675 9.16663 1.66675C5.02449 1.66675 1.66663 5.02461 1.66663 9.16675C1.66663 13.3089 5.02449 16.6667 9.16663 16.6667C13.3088 16.6667 16.6666 13.3089 16.6666 9.16675Z"
                  stroke="#14181F" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <label>Добавить ответственного</label>
        <input id="new-document-search-user-input" type="text">
    </div>
</div>
<button class="create-new-document-button">
    <p>Добавить подзадачу</p>
</button>`;
const task_for_task_path = `
<div class="path">
    <div class="path2">
        <a onclick="history.replaceState({}, '', '../document_manager/index.html?page=chat-list');get_current_content()">Чаты</a>
        <p class="slash"> / </p>
        <a class="chat-name" onclick="history.replaceState({}, '', '../document_manager/index.html?page=view-chat&id=' + current_chat_id);get_current_content()">${current_chat_name}</a>
        <p class="slash"> / </p>
        <a>Список задач</a>
        <p class="slash"> / </p>
        <p>Создание подзадачи для "Название задачи"</p>
    </div>
    <svg onclick="document.querySelector('.burger-menu').classList.toggle('active')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z" fill="#14181F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z" fill="#14181F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z" fill="#14181F"/>
    </svg>
    ${burger_menu_content.outerHTML}
</div>`;


async function task_for_task_main_function() {
    await get_current_chat();
}