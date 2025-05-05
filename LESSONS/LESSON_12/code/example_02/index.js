const leon = {
  name: "Leon",
  sayHello() {
    console.log(`Hello I am ${this.name}`);
  },
};

leon.sayHello();

leon.name = "Leonid Igorevic";

leon.sayHello();

// example

const circle = {
  radius: 4,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};
console.log(circle.getArea());

circle.radius = 10;

console.log(circle.getArea());

// Создайте объект квадрат  square пусть поле sideLength - сторона
// сделайте два метода посчитать площадь и посчитать периметр

// Сделай функцию, которая бы увеличивала размер стороны квадрата в двое
// запусти цикл на 10 повторений - и посмотри как меняется площадь в зависимости
// от длины стороны

const square = {
  sideLength: 10,
  area() {
    return this.sideLength ** 2;
  },
  perimeter() {
    return this.sideLength * 4;
  },
  // метод увеличивающий ширину в 2 раза
  increaseLength() {
    this.sideLength = this.sideLength * 2;
  },
};
console.log(square.area()); // 100
console.log(square.perimeter());
square.increaseLength();
console.log(square.area()); // 400

for (let i = 0; i < 11; i++) {
    square.increaseLength();
    console.log(square.area());
}

//
// const area = square.area();
const { area } = square;

console.log(area()); // функция в отрыве от объекта - без this

// bind создаёт новую функцию, в которой в качестве this выступает указанный объект

const chessBoard = {
    sideLength: 3,
};
const getAreaOfChessBoard = area.bind(chessBoard);
chessBoard.sideLength += 2; // если объект мутировал - функция будет работать с ним
console.log(getAreaOfChessBoard());

// Другой пример

function sayHi() {
    console.log("My name is " + this.name);
}

sayHi(); // My name is undefined

const alisher = {name: "Alisher"};
const alisherSayHi = sayHi.bind(alisher); // получили связанную с объектом функцию

alisherSayHi();
alisherSayHi();

// APPLY сразу вызывает функцию с указанным объектом в качестве this
sayHi.apply({name: "Vasilly"});  // My name is Vasilly