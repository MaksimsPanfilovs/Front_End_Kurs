const house = {
  adress: "Ponderer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

const { adress, roofColor } = house; // destructing assignment
console.log(adress, roofColor);




// Задание 2
// 🍏 Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix. 
// Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.
// Исходный массив должен остаться неизменным.
// Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]

const arr = ["apple", "orange"];

function mutate (arr) { // меняет исходный массив
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "pickle" + arr[i];
    }
}

// mutate(arr);
console.log(arr);

function addPrefix (arr, prefix) { // оставляет исходный массив неизменным
    const prefixedArr = [];
    for (let i = 0; i < arr.length; i++) {
        prefixedArr[i] = prefix + arr[i];
    }
    return prefixedArr;
}

console.log(addPrefix(arr, "pine"));
console.log(arr);




// Задание 3
// Создайте функцию gardener, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.
// Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.
// Вызовите функцию gardener c параметрами: функция поливать цветок, 'rose'. 
// Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 🧑‍🌾


function gardener (operation, item) {
    operation(item);
}

// hoisting // Learn Javascript
function water (plant) {
    console.log("I water this " + plant);
}

gardener(water, "rose");

gardener ((plant) => {console.log("I dig this " + plant);}, "nettle"); // callback