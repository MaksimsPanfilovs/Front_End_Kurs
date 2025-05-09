console.log("Hello Maksim!");

// объявили переменную и присвоили ей значение 6

// 7 примитивных типов
// Тип number
let x; // объявить
x = 10; // присвоить значение = инициализация

console.log(x);

// нецелые числа тоже number
let y = 12.5
console.log(y);

x = 13;
x = y;
console.log(x);

// Тип String
x = "Ten";
console.log(x);
let name = 'Maksim';

// Тип bigint - для очень очень больших чисел
let z = 123123n;

// Тип undefined
let message;
console.log(message);

// Тип null
let secondName = null;

// Тип boolean
// true, false
let isMale = true;

let isBigger = 10 > 4;
console.log(isBigger);

// Константы
const m = 12;
// m = 13; // ошибка!!!!

const COLOR_RED = '#f00'; 

// symbol
const symbol = Symbol("asd");
console.log(symbol);
// в качестве уникальных ключей

// Не примитив Object

const user = {
    "email": "khamidov@gmail.com"
};
console.log(user);

// Преобразование типов
// falsy values - те, которые преобразуются в false

// Явное и неявное

// Явное приведение
// 10 -> "10"
let ten = 10;
let tenAsString = String(ten);
console.log(tenAsString);
console.log(typeof ten);
console.log(typeof tenAsString);
console.log(typeof tenAsString === "string");

// Неявное преобразование к строке
let elevenAsString = 11 + ""; // "11"

// Приведение к числу
// "11" -> 11
let eleven = Number(elevenAsString);
console.log(eleven); 
console.log(typeof eleven); 

let wrongNumber = Number("tyirytryutuiyiouiou");
console.log(wrongNumber); // NaN - это особое значение
console.log(typeof NaN); // Какой тип данных у NaN? -> number
if(x < Infinity) {
    console.log("Bla");
}

console.log(typeof Infinity); // Какой тип данных у Infinity? -> number

// Самое интересное это преобразование в boolean
// явного
console.log(Boolean("Alisher")); // true
console.log(Boolean("12"));      // true

// Falsy values
console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
// console.log(Boolean(-0));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(null));      // false

// неявно в булеан
const myMoneyPoint = 12;
const myBrotherMoneyPoint = 0;

if(myMoneyPoint) {
    console.log("I\"m rich"); // выполнится
}

if(myBrotherMoneyPoint) {
    console.log("I\"m rich"); // недостижимый код - не выполнится
}

let myUser = null;
if(myUser){
    console.log('User exists');
}

myUser = {email: "user@gmail.com"};

if(myUser){
    console.log('User exists');
}

// Шаблонные строки

const myAge = 31;
const myName = "Alisher";

// const text = "Меня зовут " + myName + "Мне " + myAge + " лет.";
const text = `Меня зовут ${myName}. Мне ${myAge} лет.`;  // backticks - обратные кавычки
console.log(text);
