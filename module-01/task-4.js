'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const promptText = 'Сколько дроидов Вы хотите купить?';

let userAnswer = prompt(promptText);

// console.log(userAnswer);
// console.log(typeof userAnswer);

let totalPrice = pricePerDroid * userAnswer;

let leftCredits = credits - totalPrice;

// console.log(leftCredits);

let message;

if (userAnswer === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    userAnswer = Number(userAnswer);
    message = 'Недостаточно средств на счету!'
} else {
    userAnswer = Number(userAnswer);
    message = `Вы купили ${userAnswer} дроидов, на счету осталось ${leftCredits} кредитов.`
};

alert(message);
