'use strict';

let total = 0;

let input = '';

do {
    input = prompt('Введите число!', '');
    input = Number(input);
    total += input;

} while (input === null);

console.log(`Общая сумма чисел равна ${total}`);
