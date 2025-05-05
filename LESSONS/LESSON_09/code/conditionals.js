// условный оператор
// if

let age = 1;

if (age > 21) {
  // если условие истинно - выполняется этот блок кода
  console.log("You can buy alcohol");
} else {
  // если ложно - то вот этот
  console.log("You can not buy alcohol");
}

if (age > 21) {
  // если условие истинно - выполняется этот блок кода
  console.log("You can buy alcohol");
} else if (age === 1) {
  // если ложно - то вот этот
  console.log("Milk is the best option for you");
} else {
  console.log("You can not buy alcohol");
}

// switch
const country = "Iran";
switch (country) {
  case "UK":
    console.log("London");
    break;
  case "USA":
    console.log("Washington DC");
    break;
  default:
    console.log("Country is unknown");
}

// myAge
// switch case
// возраст 1 - выведем "малыш"
// возраст 2 - выведем "ползунок"
// возраст 5 - выведем "дошкольник"
// возраст 16 - выведем "подросток"
// возраст 45 - выведем "зрелый"
// во всех остальных случаях "отличный возраст"

let myAge = 20;
switch (myAge) {
  case 1:
    console.log("Малыш");
    break;
  case 2:
    console.log("Ползунок");
    break;
  case 5:
    console.log("Дошкольник");
    break;
  case 16:
    console.log("Подросток");
    break;
  case 45:
    console.log("Зрелый");
    break;
  default:
    console.log("Отличный возраст");
}

console.log(12 - 3 + true + "12" + Boolean(NaN));
// 9 + true + "12" + Boolean(NaN)
// 9 + 1 + "12" + Boolean(NaN)
// 10 + "12" + Boolean(NaN)
// "1012" + Boolean(NaN)
// "1012" + false
// "1012false"

// Функции
// functional declaration - объявление функции
function neighbor(time) {
  if (time > 0 && time < 8) {
    console.log("Drr-drr-drr-drr-drr-drr");
    return "Drr-drr-drr-drr-drr-drr";
  }
}

neighbor(); // вызов функции - call
neighbor();

const result = neighbor(5);
console.log(result);

{
  const animal = "Panda";
}
// console.log(animal); // будет ошибка - так как не видит переменную внутри блока

{
  var x = 10; // использование считается устаревшим
}
console.log(x);
