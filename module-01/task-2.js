'use strict';

const total = 100;

const ordered = 130;

let message;

if (ordered > total) {
    message = alert('На складе недостаточно товаров!');
} else {
    message = alert('Заказ оформлен, с вами свяжется менеджер');
}
