// Regular expression
// RegExp

// Найти фрагмент строки, подходящий под описание
// Можем все вхождения на какую-нибудь другую строку
// Проверить ли соответствует ли строка шаблону - валидации

const text1 = 
"Hello, Alisher! oh, Anna, you are also here, well hello there!";

console.log(text1.match(/Hello/));

// Good day, Alisher! oh, Anna, you are also here, well hello there!
console.log(text1.replace(/Hello/, "Good day"));

// Что такое флаги? i, g
const text2 = "Apple, Orange, apple, orange, Apple, Orange, apple, orange";
const newText2 = text2.replace(/apple/, "banana");

// Без флага заменяется только первое вхождение
// Apple, Orange, banana, orange, Apple, Orange, apple, orange
console.log(newText2);

console.log(text2.replace(/apple/g, "banana"));
// Флаг g - позволяет работать со всеми вхождениями, а не только с первым
// Apple, Orange, banana, orange, Apple, Orange, banana, orange


console.log(text2.replace(/apple/gi, "banana"));
// флаг i - делает нечувствительным к регистру
// banana, Orange, banana, orange, banana, Orange, banana, orange


// Хочу проверить, что выражение состоит из буквы и нескольких чисел

// a87 - да
// b675 - да
// c99 - да

// x88y - нет
const code = "Cakea87";

console.log(code.match(/.87/)); // точка соответствует любому символу - 

// проверим начинается ли выражение со слова Cake
console.log(code.match(/^Cake/)); // каретка ^ обозначает начало строки

const example = "Hello, John!";

// null - в начале строки, нету указанного выражения
console.log(example.match(/^John/));

// мы можем проверить находится ли слово в конце строки?
// для этого мы воспользуемся $
console.log(example.match(/John!$/)); // конец строки

// Хочу проверить, что выражение из четырех символов начиналось
// на t и заканчивалось на 8

const example2 = 'tuh8'; // должно проходить
const example3 = 'tuh9'; //не должно проходить

console.log(example2.match(/^t..8$/)); // Ok
console.log(example3.match(/^t..8$/)); // null

// а если мне нужно найти точку как знак препинания
// aaa.aaa.aaa

const example4 = "aaa.aaa.aaa";
// экранировать точку с помощью обратного слэша
// другие специальные символы тоже придется экранировать
console.log(example4.match(/aaa\.aaa\.aaa/));

// Как обозначить буквенные символы

// Хочу, чтобы слово начиналось с букв h, l или b?
// hate, late, bate - ok
// wate - не ок

const example5 = "hate";

// любая из трех подойдет в качестве первого символа
console.log(example5.match(/[hlb]ate/));
console.log("wate".match(/[hlb]ate/)); // null

// слово должно начинаться на букву F дальше на втором месте
// должна быть буква a или цифра 6
// на третьем месте может быть любой символ
// слово должно закончится на любую строчную букву - нижний регистр
const word = "F6mv"; // ok

console.log(word.match(/^F[a6].[a-z]$/)); // ok

// [A-Za-z] все буквы
// [A-Za-z0-9] - буква или цифра