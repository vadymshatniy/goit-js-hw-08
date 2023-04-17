import throttle from "lodash.throttle";

// Призначення елементів DOM у змінні:
const form = document.querySelector('.feedback-form');
const fieldEmail = document.querySelector('input');
const fieldMessage = document.querySelector('textarea');
const button = document.querySelector("button");


// Запис даних у local Storage:
function setDatasToLocal() {
     localStorage.setItem('feedback-form-state', JSON.stringify({
        email: fieldEmail.value,
        message: fieldMessage.value,
     }))
}
form.addEventListener('input', throttle(() => {
    setDatasToLocal();
}, 500));


// Заповнення полів email і message даними з local Storage під час перезавантаження сторінки:
const localDatas = JSON.parse(localStorage.getItem('feedback-form-state'))
// const localEmail = localDatas.email || 0;
// fieldEmail.value = localEmail;
// const localMessage = localDatas.message || 0;
// fieldMessage.value = localMessage;

const localEmail = setEmailFromLocal();
function setEmailFromLocal() {
    if (localDatas !== null) {
        return localDatas.email;
    } else {
        return " ";
    }
}
fieldEmail.value = localEmail;
const localMessage = setMessageFromLocal();
function setMessageFromLocal() {
    if (localDatas !== null) {
        return localDatas.message;
    } else {
        return " ";
    }
}
fieldMessage.value = localMessage;

// Дії під час submit:
form.addEventListener('submit', onFormSubmit); 
function onFormSubmit(event) {
const localDatas = JSON.parse(localStorage.getItem('feedback-form-state'))
event.preventDefault();
console.log(localDatas);
localStorage.clear();
form.reset();
};
