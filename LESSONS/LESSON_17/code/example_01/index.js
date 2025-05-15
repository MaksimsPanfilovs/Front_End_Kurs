const word = "1998-hjklw:John";

const notDigit = /[^0-9]/; // то есть если каретка находится внутри квадратных скобок - она обозначает отрицание

const digit = /\d/; // одна цифра
const notDigitVer2 = /\D/; // не цифра

const letter = "9";

console.log(digit.test(letter));
// [0-9] === \d
// [^0-9] === \D

// alphanumeric symbol
// \w === [0-9A-Za-z_]
// \W === [^0-9A-Za-z_]

//  \s - white space, tab, new line
const fullName = "John Bowie";

const regex2 = /John\sBowie/;
console.log(regex2.test(fullName));

const regex3 = /[A-Z][a-z]{3}\s[A-Z][a-z]{4}/; // если бы мы знали какая длина имени и фамилии
console.log(regex3.test(fullName));

// если символ должен быть хотя бы один раз представлен, но может быть и больше
const regex4 = /[A-Z][a-z]+\s[A-Z][a-z]+/;
console.log(regex4.test("Al Key")); // true
console.log(regex4.test("A Key")); // false

// символы, которые обозначают количество называются - кванторами

const cameraModel = "Canon 5R";
const cameraModel2 = "Canon 5RD";
const cameraModel3 = "Canon 12RD";
const cameraModel4 = "Canon 1200RD";
// сделаем выражение, которое бы подошло под оба варианта
const regex5 = /Canon \d\d?RD?/;

console.log("================");
console.log(regex5.test(cameraModel));
console.log(regex5.test(cameraModel2));
console.log(regex5.test(cameraModel3));
console.log(regex5.test(cameraModel4));

// * - значит неопределенное количество вхождений - (0 или более)

const regex6 = /\d*/; // 1, 12, 15 - ok, а вот "1h" - не подойдет

// Группировка

const text = "I am programmer but you can never say. I am sure";

const regex7 = /(I) (am)/gi;
console.log(text.replace(regex7, `$2 $1`));

const fullNameReg = /([A-Z][a-z]+)\s([A-Z][a-z]+)/g;

const text2 = "I am Alisher Khamidov, I am looking for Eva Dieterle";

console.log(text2.replace(fullNameReg, `$2 $1`));

const phoneNumber = "0151 52466512";
// +49 (151) 524 665 12

const phoneRegex = /0(\d{3})\s?(\d{3})(\d{3})(\d{2})/;

const maskedPhone = phoneNumber.replace(phoneRegex, `+49 ($1) $2 $3 $4`);
console.log(maskedPhone);  // +49 (151) 524 665 12

// Code Wars с 8 уровня - задачи по javascript

// Leet code - задачи Java, Java Script

// input pattern - поискать в гугл
