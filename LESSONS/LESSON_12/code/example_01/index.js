// Object
// key - value

const user = { email: "john@gmail.com" };
const age = 18;

// user = {email: "bob@yahoo.org"};  // ошибка

// изменил значение свойства объекта
user.email = "john@yahoo.org";

console.log(user);

// как добавить в объект новое свойство
user.eyeColor = "brown";

console.log(user);

// "hair color" - так делать не стоит

user["hair color"] = "yellow"; // box syntax

console.log(user);

const { "hair color": color } = user; // деструктиризация, если с пробелом

console.log(color);

// Пример того, как можно создать объект из переменных

const pandaName = "Po";
const favoriteFood = "bamboo";

const panda = {
  name: pandaName,
  favoriteFood, // short syntax - если имя переменной совпадает с ключом, который мы хотим вывести
};

console.log(panda); // { name: 'Po', favoriteFood: 'bamboo' }

// Создайте переменную рост назовите её bobHeight и пусть будет равна 184
// Создайте объект bob с ключём  height в котором будет лежать значение bobHeight

const bobHeight = 184;
const bob = {
  height: bobHeight,
};

// динамический ключ - ключ, который лежит внутри переменной
const key1 = "name";
const giraffeSam = {
  name: "Sam",
  age: 7,
};
console.log(giraffeSam.key1); // undefined
console.log(giraffeSam[key1]); // giraffeSam.email

const keys = ["name", "age"];
for (let i = 0; i < keys.length; i++) {
  console.log(giraffeSam[keys[i]]);
}

// Какие у объекта есть ключи?

// Список ключей объекта
const keysOfGiraffe = Object.keys(giraffeSam);
console.log(keysOfGiraffe); // [ 'name', 'age' ]

// Список значений объекта
const valuesOfGiraffe = Object.values(giraffeSam);
console.log(valuesOfGiraffe); // [ 'Sam', 7 ]

// entries - пары ключ-значение
const entriesOfGiraffe = Object.entries(giraffeSam);
console.log(entriesOfGiraffe); // [ [ 'name', 'Sam' ], [ 'age', 7 ] ]

// freeze
const breakfast = {
    title: "omlet",
    caloriies: 1200,
};

Object.freeze(breakfast);

// Можем ли добавить новый ключ после заморозки
breakfast.warm = true; //

console.log(breakfast.warm); // undefined
console.log(breakfast);

// Можем ли мы изменить значения уже бывших свойств? нет
breakfast.title = "cereal";
console.log(breakfast); // { title: 'omlet', caloriies: 1200 }

const dinner = {
    title: "pasta",
    colories: 2000,
};
Object.seal(dinner);

// Могу ли добавить новое свойство? нет
dinner.fat = true; // не добавилось
console.log(dinner); // { title: 'pasta', colories: 2000 }

// Могу ли изменить старые свойства? да
dinner.colories += 200;

console.log(dinner); // { title: 'pasta', colories: 2200 }

// Object create - можем создавать объекты
const musician = Object.create({name: "Freddie Mercury" });
console.log(musician); // {}
console.log(musician.name); // Freddie Mercury


// поговорим про прототипное наследование позже

const address = {
    street: "Pfondorfer",
    number: 12, 
};

const firma = {
    title: "Horns and hoofs",
};

Object.assign(firma, address); // копирует свойства у адреса и добавляет их в фирму

console.log(firma); // { title: 'Horns and hoofs', street: 'Pfondorfer', number: 12 }

address.post = 10407;
console.log(firma); // { title: 'Horns and hoofs', street: 'Pfondorfer', number: 12 }

// Аналог того же самого это spread operator, но немного иначе

const personalInfo = {
    name: "Fedor",
};

const medicalInfo = {
    bloodType: 1,
};

const fedor = {
    ...personalInfo, // скопировали поля из объекта personalInfo
    ...medicalInfo, // скопировали поля из объекта medicalInfo
    age: 19,  // указали ручками ключ значение
};

console.log(fedor); // { name: 'Fedor', bloodType: 1, age: 19 }

// создайте метод - который принимает объект и два параметра типа строка
// первый из них это будущий ключ, второй будущее значение

// ({email: "bob@gmail.com"}, eyeColor, "brown") 
// ---> {email: "bob@gmail.com", eyeColor:"brown"}

// const bob = {
    // email: "bob@gmail.com",
// };
// function unify (obj, eyeColor, "brown") {
    // const unifyObj = {
        // ...bob,
        // eyeColor: 
    // }
// }
// 
// unify(email, "bob@gmail.com");

function unify (obj, additionalKey, additionalValue) {
    // const newObj = {...obj};
    // newObj[additionalKey] = additionalValue;
    // return newObj;

    return {...obj, [additionalKey]: additionalValue};
}

const unify2 = (obj, additionalKey, additionalValue) => {
    return {...obj, [additionalKey]: additionalValue};
}


const book = {title: "The Lord Of The Rings"};
const newBook = unify(book, "author", "Tolkien JR");

newBook.title = "Harry Potter";
console.log(newBook);
console.log(book);