import throttle from "lodash.throttle";

// Призначення елементів DOM у змінні:
const fieldEmail = document.querySelector('input');
const fieldMessage = document.querySelector('textarea');
const button = document.querySelector("button");

// Запис даних з полів email і message у local Storage:
function setDatasToLocal() {
     localStorage.setItem('feedback-form-state', JSON.stringify({
        email: fieldEmail.value,
        message: fieldMessage.value,
     }))
}
fieldEmail.addEventListener('input', throttle(() => {
    setDatasToLocal();
}, 500));
fieldMessage.addEventListener('input', throttle(() => {
    setDatasToLocal();
}, 500));

// Заповнення полів email і message даними з local Storage під час перезавантаження сторінки
// (з використанням функцій, які запобігають виникненню помилок після очищення localStorage):
const localDatas = JSON.parse(localStorage.getItem('feedback-form-state'));
const localEmail = setEmailFromLocal();
function setEmailFromLocal() {
    if (localDatas !== null) {
        return localDatas.email;
    } else {
        return " ";
    }
}
const localMessage = setMessageFromLocal();
function setMessageFromLocal() {
    if (localDatas !== null) {
        return localDatas.message;
    } else {
        return " ";
    }
}
fieldEmail.value = localEmail;
fieldMessage.value = localMessage;

// Дії під час submit:
button.addEventListener('click', () => {
    console.log({
        email: fieldEmail.value,
        message: fieldMessage.value,
    });
    localStorage.clear();
    fieldEmail.value = " ";
    fieldMessage.value = " ";
});
