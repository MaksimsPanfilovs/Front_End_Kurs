// Array
// В JAVA - нумерованный, одного типа значения, фиксированная длина

const students = [];
console.log(students);

const teachers = ["Sergey", "Alisher", "Igor"];
console.log(teachers);

// еще один способ создать массив
const animals = new Array(); // пустой массив
const plants = new Array("Camomile", "Dandelion", "Basil");
console.log(plants);

// получить из массива элемент по индексу
const firstTeacher = teachers[0];
console.log(firstTeacher);

console.log(teachers[10]); // undefined

// еще один способ получить элемент по индексу
const secondTeacher = teachers.at(1);
console.log(secondTeacher);

const negativeTeacher = teachers.at(-2);
console.log(negativeTeacher); // Alisher

console.log(plants); // [ 'Camomile', 'Dandelion', 'Basil' ]
// хочу добавить четвертый элемент
plants[3] = "Oak";

console.log(plants); // [ 'Camomile', 'Dandelion', 'Basil', 'Oak' ]
// динамический массив - его длина может увеличиваться
// массив больше похож на лист из java

// а значит
// push - добавляет элемент в конец массива
plants.push("Cactus");
console.log(plants); // [ 'Camomile', 'Dandelion', 'Basil', 'Oak', 'Cactus' ]

// хочу перезаписать последний элемент
console.log(plants.length); // 5
plants[plants.length - 1] = "Rose";
console.log(plants); // [ 'Camomile', 'Dandelion', 'Basil', 'Oak', 'Rose' ]

// забирает последний элемент массива и возвращает его
// мы сохранили этот элемент в отдельную переменную
const rose = plants.pop();
console.log(plants); // [ 'Camomile', 'Dandelion', 'Basil', 'Oak' ]
console.log(rose); // "Rose"

// [9, "asdas", true] // tuple

// Напишите метод, который принимает три параметра
// возраст
// имя
// цвет волос
// пусть метод возвращает новый массив с этой информацией
//


function createPersonalInfo (age, name, hairColor) {
    // const person = [age, name, hairColor];
    // return person;
    return [age, name, hairColor];
}
console.log(createPersonalInfo(31, "Alisher", "brown"));

// shift - забирает элемент в начале, unshift - добавляет элемент в начало

const cars = ["BMW"]; // ["BMW"]
cars.unshift("Mercedes"); // добавили элемент в начало массива
console.log(cars); // [ 'Mercedes', 'BMW' ]

// как забрать элемент из начала
const mercedes = cars.shift();

// О сложных местах
// Почему мы сохранили в константу и изменения массива не вызвало проблемы

const cities = ["Berlin"];
const cities2 = cities;

cities.push("London");

console.log(cities2); // [ 'Berlin', 'London' ]

cities2.push("Milan");

console.log(cities); // [ 'Berlin', 'London', 'Milan' ]

// Вопрос: как нам сделать копию значений массива, чтобы он был независим от первого массива

const newCities = [...cities]; // spread оператор

newCities.push("Hamburg");

console.log(cities); // [ 'Berlin', 'London', 'Milan' ]
console.log(newCities); // [ 'Berlin', 'London', 'Milan', 'Hamburg' ]

// как мы можем создать массив из двух других
const array1 = ["a", "b", "c"];
const array2 = ["e", "f", "g"];

const alphabet = [...array1, ...array2];
console.log(alphabet); // [ 'a', 'b', 'c', 'e', 'f', 'g' ]




