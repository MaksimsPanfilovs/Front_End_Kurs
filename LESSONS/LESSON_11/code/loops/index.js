// for
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// Создать цикл, который бы вышел в консоль числа от 100 до 0, через 2
// 100, 97, 94, 91, ....

// сделайте метод с параметром - от которого начинается счет
// count(162) // 162, 159, 156, ....

for (let i = 100; i >= 0; i -= 3) {
  console.log(i);
}

function counter(num) {
  for (let i = num; i >= 0; i -= 3) {
    console.log(i);
    if (i === 1) {
      console.log(0);
    }
  }
}
counter(162);

// для примера более сложный пример
for (let i = 100, j = 5; i > j && j < 60; i--, j++) {
  console.log(i, j);
}

// while
let i = 100;
while (i > 0) {
  console.log(i);
  i--;
}

//
const animals = ["panda", "wolf", "fox"];

// с помощью цикла while сделайте так,
// чтобы в массиве все животные были написаны большими буквами
// ["panda", "wolf", "fox"] -> ["PANDA", "WOLF", "FOX"];

let j = 0;
while (j < animals.length) {
  animals[j] = animals[j].toUpperCase();
  j++;
}
console.log(animals);

// for ... of

for (let animal of animals) {
  console.log(animal);
}


// forEach
// animals.forEach((a) => {
//   console.log(a);
// });
