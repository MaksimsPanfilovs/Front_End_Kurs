// Array.prototype

// push, pop, shift, unshift - мутирующие методы
// at - аналог  бокс синтаксиса
const fruits = ["apple", "orange", "grape"];
// ["APPLE", "ORANGE", "GRAPE"]

console.log(fruits.at(0));
// console.log(fruits[-1]);
console.log(fruits.at(-1));

// map
// создает новый массив, и не мутирует исходный
const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper);

const fruitsLengths = fruits.map((fruit) => fruit.length);
console.log(fruitsLengths); // [ 5, 6, 5 ]

// pipeline
// [ "5", "6", "5" ]
const strArr = fruits.map((fruit) => fruit.length.toString());
console.log(strArr);

// Пример использования с массивами объектов
const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 },
];

// хочу создать массив с более толстыми версиями этих животных

// const americanAnimals = animals.map((animal) => {
// const americanAnimal = {...animal};
// americanAnimal.weight *= 1.3;
// return americanAnimal;
// });

const americanAnimals = animals.map((animal) => ({
  ...animal,
  weight: animal.weight * 1.3,
}));

console.log(animals);
console.log(americanAnimals);

const foo1 = (a) => {
  return a;
};
const foo2 = (a) => a;

const animalsNames = animals.map((animal) => animal.name);
console.log(animalsNames); // [ 'Po', 'Tigrica', 'Kovalsky', 'Melman' ]

// Если мы хотим изменить исходный массив - элементы в нем, то лучше воспользоваться
// методом  forEach
// метод можно использовать, чтобы выполнить операции с каждым из элементов

// добавим в каждый объект исходного массива новое поле
// то есть мутируем каждое животное
// isHealthy true

animals.forEach((animal) => {
  animal.isHealthy = true;
});
console.log(animals); // { name: 'Po', specie: 'panda', weight: 300, isHealthy: true },

// reduce
// Мы решили отвезти на экскурсию автобусную
// грузоподъёмность автобуса 2500кг
// Сможем ли мы поместить животных в автобусе

let acc = 0;
for (let i = 0; i < animals.length; i++) {
  acc += animals.at(i).weight;
}
console.log(acc);

const totalWeight = animals.reduce((acc, current) => acc + current.weight, 0);
// acc 0  current 300 = 0 + 300
// acc 300  current 250 = 300 + 250
console.log(totalWeight);

const dishes = [
  { name: "bamboo", calories: 500 },
  { name: "meat", calories: 1600 },
  { name: "fish", calories: 1000 },
];

// Какая калорийность всех блюд

// const totalCalories = dishes.reduce(
//   (acc, dish) =>
// acc + (dish.name === "meat" ? dish.calories * 3 : dish.calories),
//   0
// );

const totalCalories = dishes.reduce((acc, dish) => {
  if (dish.name === "meat") {
    return acc + dish.calories * 3;
  } else {
    return acc + dish.calories;
  }
}, 0);

console.log(totalCalories); // 3100

// join

const fruitsCocktail = fruits.join("-");
console.log(fruitsCocktail); // apple-orange-grape

// split
const insurance = "123.128.12412312";
const numsAsStrings = insurance.split("."); // delimiter - разделитель - символ, который отделяет друг от друга
console.log(numsAsStrings); // [ '123', '128', '12412312' ]

const nums = numsAsStrings.map((element) => Number(element));
console.log(nums); // [ 123, 128, 12412312 ]

// Пингвин заболел
// Найдем и заразим
animals.forEach((animal) => {
  if (animal.specie === "penguin") {
    animal.isHealthy = false;
  }
});

console.log(animals);

// К нам пришла инспекция
// Есть ли в нашем зоопарке больные животные
// Есть ли больные? true | false

const isQuarantine = animals.some((animal) => animal.isHealthy === false);
console.log(isQuarantine); // true

// Болеют ли все животные
// every - будет возвращать истину если предикат выполняется для всех
const isEpidemic = animals.every((animal) => animal.isHealthy === false);
console.log(isEpidemic); // false

// Стало известно, что разыскивается тигр. Его вид - tiger, а его имя "Killer"
// Есть в нашем зоопарке такой тигр?

let hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log(hasKiller); // false

// к нам забрался киллер
animals.push({ name: "Killer", specie: "tiger", weight: 400 });

// снова проверим его наличие 
hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);

console.log(hasKiller);

// Как найти и получить элемент удовлетворяющий условию
// find

// Животное с именем Киллер
const killer = animals.find((animal) => animal.name === "Killer");
console.log(killer); // { name: 'Killer', specie: 'tiger', weight: 400 }

const indexOfKiller = animals.findIndex((animal) => animal.name === "Killer");
console.log(indexOfKiller); // 4 (первый слева)

const indexOfPanda = animals.lastIndexOf((animal) => (animal.name = "Po"));

// slice

// создает копию из исходного массива. Указываем с какого индекса по какой
// первый параметр показывает начало - включительно
// второй - не включительно, можно не указывать
// третий - необязательный параметр
const shortListOfAnimals = animals.slice(2, 4);

console.log(animals); // исходный массив не изменился
console.log(shortListOfAnimals);

// splice
// мутирующий

const months = ["January", "February", "March", "April"];
// можно указать элементы, которые мы хотим подставить вместо вырезанного куска
// второй параметр указывает сколько элементов мы вырезаем - количество
const removeMonths = months.splice(2, 2, "July", "August");
console.log(months); // [ 'January', 'February', 'July', 'August' ]
console.log(removeMonths); // [ 'March', 'April' ]

const chars = ["@", "@", "@", "*", "*", "$"];
// "*" хочу заменить на "#"
const substitutes = ["#", "#"];
chars.splice(3, 2, ...substitutes);
console.log(chars);

// findIndex, splice

animals.splice(indexOfKiller, 1); // убрали элемент по индексу
console.log(animals);

