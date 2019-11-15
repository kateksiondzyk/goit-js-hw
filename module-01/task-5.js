'use strict';

let country;

let crepitsPerCountry;

const promptText = 'В какую страну Вы хотите осуществить доставку?';

let userAnswer = prompt(promptText);

let message;

let countryA = 'китай';
let countryB = 'чили';
let countryC = 'австралия';
let countryD = 'индия';
let countryE = 'ямайка';

if (userAnswer === null) {
    message = 'Отменено пользователем!';
} else {
    userAnswer = userAnswer.toLowerCase();

    switch (userAnswer) {
        case countryA:
            crepitsPerCountry = 100;
            country = 'Китай';
            message = `Доставка в ${country} будет стоить ${crepitsPerCountry} кредитов`;
            break;

        case countryB:
            crepitsPerCountry = 250;
            country = 'Чили';
            message = `Доставка в ${country} будет стоить ${crepitsPerCountry} кредитов`;
            break;

        case countryC:
            crepitsPerCountry = 170;
            country = 'Австралия';
            message = `Доставка в ${country} будет стоить ${crepitsPerCountry} кредитов`;
            break;

        case countryD:
            crepitsPerCountry = 80;
            country = 'Индия';
            message = `Доставка в ${country} будет стоить ${crepitsPerCountry} кредитов`;
            break;

        case countryE:
            crepitsPerCountry = 120;
            country = 'Ямайка';
            message = `Доставка в ${country} будет стоить ${crepitsPerCountry} кредитов`;
            break;

        default:
            message = 'В вашей стране доставка не доступна';
    }
}

alert(message);