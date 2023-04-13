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
fieldEmail.addEventListener('input', () => {
    setDatasToLocal();
});
fieldMessage.addEventListener('input', () => {
    setDatasToLocal();
});


// Заповнення полів email і message даними з local Storage під час перезавантаження сторінки:
const localDatas = JSON.parse(localStorage.getItem('feedback-form-state'));
const localEmail = localDatas.email;
const localMessage = localDatas.message;
fieldEmail.value = localEmail;
fieldMessage.value = localMessage;

// Дії під час submit:
button.addEventListener('click', () => {
    localStorage.clear();
    console.log({
        email: fieldEmail.value,
        message: fieldMessage.value,
    });
});