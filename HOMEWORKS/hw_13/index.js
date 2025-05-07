// Задание 1
// У вас есть массив объектов:

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porsche", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];
// Создайте на основе старого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

// const newCars = cars.map(car => ({ // 1 метод
// brand: car.brand,
// isDiesel: car.isDiesel,
// }));

const newCars = cars.map(({ brand, isDiesel }) => ({
  // 2 метод
  brand,
  isDiesel,
}));

console.log(newCars);

// одно и тоже
// () => (x)
// () => x
// () => {return x}

// одно и тоже
// () => ({name: "Ivan"})
// () => {return {name: "Ivan"}}

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const dieselCars = cars.filter((car) => car.isDiesel);
// const dieselCars = cars.filter((car) => {return car.isDiesel});
console.log(dieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const notDieselCars = cars.filter((car) => !car.isDiesel);
console.log(notDieselCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const nonDieselTotalPrice = notDieselCars.reduce(
  (acc, car) => acc + car.price,
  0
);
console.log(nonDieselTotalPrice);

const nonDieselTotalPriceV2 = cars.reduce((acc, car) => {
  if (!car.isDiesel) {
    return acc + car.price;
  }
  return acc;
});

const nonDieselTotalPriceV3 = cars.reduce(
  (acc, car) => (!car.isDiesel ? acc + car.price : acc),
  0
);
console.log(nonDieselTotalPriceV3);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.

cars.forEach((car) => {
  car.price *= 1.2;
});
console.log(cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

// const modernCars = cars.map((car) =>
//   car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car
// );

const tesla = { brand: "Tesla", price: 25000, isDiesel: false };
const modernCars = cars.map((car) => (car.isDiesel ? { ...tesla } : car)); // {} - создание нового объекта
console.log(modernCars);
