const cars = [
  { brand: "AMW", price: 20000, isDiesel: true },
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porsche", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

// reverse - мутирующий! Но возвращает ссылку на исходный массив

cars.reverse();
console.log(cars);

// sort

const parts = ["air filter", "tires", "spark plugs", "accumulator"];

parts.sort();

console.log(parts); // [ 'accumulator', 'air filter', 'spark plugs', 'tires' ]

const nums = [1, 4, 2, 10, 12];

nums.sort();
console.log(nums); // [ 1, 10, 12, 2, 4 ] - отсортировал как строки

nums.sort((a, b) => a - b);
console.log(nums); // [ 1, 2, 4, 10, 12 ]

nums.sort((a, b) => b - a);
console.log(nums); // [ 12, 10, 4, 2, 1 ]

parts.sort((a, b) => a.localeCompare(b));
console.log(parts); // [ 'accumulator', 'air filter', 'spark plugs', 'tires' ]

parts.sort((a, b) => b.localeCompare(a));
console.log(parts); // [ 'tires', 'spark plugs', 'air filter', 'accumulator' ]

cars.sort((a, b) => a.price - b.price); // сортируем по возрастанию цены
console.log(cars);

// Сравнение по нескольким параметрам
// сначала сравним по цене
// если цена совпадает, то сортируем уже по названию - по алфавиту

const compareCars = (a, b) => {
  const priceComparisonResult = a.price - b.price;
  if (priceComparisonResult === 0) {
    // проверяем по алфавиту
    return a.brand.localeCompare(b.brand);
  }
  return priceComparisonResult;
};

cars.sort(compareCars);
console.log(cars);
