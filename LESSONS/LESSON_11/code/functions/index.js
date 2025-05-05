// call
sayHi();
// hoisting = поднятие
// когда вызов может быть раньше в коде, чем сама декларация функции

// FUNCTION DECLARATION
function sayHi() {
  console.log("Hi!");
}

console.log(x); // hoisting var
var x = 10;
// const и let так не работают!

// sayGoodbye(); // не сработает hoisting

// FUNCTIONAL EXPRESSION
const sayGoodbye = function () {
  console.log("Bye bye");
};

sayGoodbye();

//
function butler(action) {
  action();
}

butler(sayHi);
butler(sayGoodbye);

// сосед
function neighbors(action, thing) {
  action(thing);
}

const party = function (track) {
  console.log("Tuc-tuc-tuc " + track);
};

const drill = function (item) {
  console.log("I drill " + item);
};

neighbors(party, "Britney Spears");
neighbors(party, "Alabama Shacks");
neighbors(party, "Ramstein");
neighbors(drill, "wall");

// Пример калькулятор
// calculator(add, 9, 7)
// calculator(divide, 12, 4)

function calculator(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

console.log(calculator(add, 9, 7));
console.log(calculator(divide, 12, 4));

// anonyms function - анонимная функция

// пример с вычитанием
const res = calculator(
  function (a, b) {
    return a / b;
  },
  9,
  4
);
console.log(res);

const res2 = calculator((a, b) => a - b, 9, 4);

// arrow function - стрелочная функция
// умножение
const multiply = (a, b) => a * b; // стрелочная функция без тела

const multiply2 = (a, b) => {
  return a * b;
}; // стрелочная функция с телом

// стрелочная функция, которую передали в качестве параметра в другую функцию называется
// колбеком
// Возведение в степень "a" возвести в степень "b"
const power = (a, b) => a ** b;
const twoPowerOfThree = calculator(power, 2, 3);
console.log(twoPowerOfThree); // 8

// pirate

function pirate (operation, item) {
    operation(item);
}

const drinkSmth = (a) => {
    console.log("I drink " + a);
};


const swim = (vehicle) => {
    console.log("I roam seas in my " + vehicle);
};

pirate(swim, "ship")
pirate(drinkSmth, "rom");
pirate(swim, "barrel");
pirate(drinkSmth, "water");
