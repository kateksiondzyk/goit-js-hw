'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

const promtText = 'Введите пароль!';

const userPassword = prompt(promtText);

if (userPassword === null) {
    message = 'Отменено пользователем!';
} else if (userPassword === 'jqueryismyjam') {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);