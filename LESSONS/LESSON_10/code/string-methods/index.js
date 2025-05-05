let fruit = "apple";

let fruitUpper = fruit.toUpperCase();
console.log(fruitUpper); // APPLE

console.log(fruit[0]); // a
console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined // box natation == syntax
console.log(fruit.at(10)); // undefined

console.log(fruit.toLowerCase()); // apple // pipeline

console.log("0".toLowerCase());
console.log("A".toLowerCase()); // a

console.log(fruit.charAt(0)); // a
console.log(fruit.charAt(10), "char at"); // пустой символ

console.log(fruit.charCodeAt(0)); // 97

// useful
// "pine" + "apple"
// concat - для объединение строк - создает новою строку из двух
const pine = "pine";

if (pine) {
  const pineapple = pine.concat(null); // если слева будет null, вылезет ошибка
  console.log(pineapple);
}

const email = " John@gmail.com";
console.log(email);
// trim обрезает пробелы и переносы строк leading - слева and trailing - в конце строки
console.log(email.trim().toLowerCase());
console.log(email.indexOf("@")); // 5 это индекс @
console.log(email.indexOf("$")); // -1

console.log(email.trimStart()); // "John@gmail.com "
console.log(email.trimEnd()); // " John@gmail.com"

// pad
const cake = "Cake";
console.log(cake.padStart(10)); // "    Cake"
console.log(cake.length);
console.log(cake.padStart(10).length);
console.log(cake.padEnd(10)); // "Cake     "
console.log(cake.padEnd(10, "*")); // "Cake******"

// slice
const sliceOfCake = cake.slice(3);
console.log(sliceOfCake); // "e"
console.log(cake.slice(0)); // "Cake"
console.log(cake.slice(1)); // "ake"
// a piece of cake

console.log(cake.slice(1, 3)); // "ak" - верхний индекс не включительно
console.log(cake.slice(-2)); // "ke" - начиная с конца строки
console.log("курочка".slice(-2)); // "ка"
console.log("улыбочка".slice(-2)); // "ка"

// substring
const animal = "panda";
console.log(animal.substring(2)); // "nda" - если указываем один параметр - то от индекса до конца строки

console.log(animal.substring(2, 4)); // "nd" - с какого по какой символ

console.log("курочка".substring(-2)); // "курочка"
// Выводы: slice удобнее потому что можно работать с отрицательными индексами

const token = "paper.bread.leaf";
const indexOfFirstDot = token.indexOf(".");
const indexOfLastDot = token.lastIndexOf("."); // чтобы найти индекс элемента справа
console.log(indexOfFirstDot);
console.log(indexOfLastDot);

// Напишем метод, который имейл и возвращает
// имя пользователя - то есть все что идет до значка собачки
// getNameFromEmail
// "alisher-khamidov@gmail.com" --> alisher-khamidov

// доп задание
// учтите что слева и справа могут быть пробелы

// напишите метод getEmailService
// "alisher-khamidov@gmail.com" --> @gmail.com

// напишите метод getFirstName
// "alisher-khamidov@gmail.com" --> alisher

const email1 = "alisher-khamidov@gmail.com";

function getNameFromEmail(email) {
  if (email.indexOf("@") < 0) {
    throw new Error("Invalid email");
  }
  return email1.slice(0, email.indexOf("@")).trimStart();
}
console.log(getNameFromEmail(email1));

try {
    console.log(getNameFromEmail("alisher-khamidovgmail.com"));
} catch (error) {
    console.error(error);
}
console.log("Дальше");

function getEmailService(email) {}

function getFirstName(email) {}
