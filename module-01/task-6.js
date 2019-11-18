'use strict';

let total = 0;

let input;

do {
    input = prompt('Введите число!', '');
    input = Number(input);
    total += input;

    console.log(`Общая сумма чисел равна ${total}`);

} while (input !== null)

