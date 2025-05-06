const drinks = [
  { name: "Bloody Mary", strength: 14, price: 7 },
  { name: "Jin", strength: 25, price: 4 },
  { name: "Beer", strength: 7, price: 3.5 },
  { name: "Cider", strength: 2, price: 5 },
  { name: "Beer", strength: 7, price: 5 },
];

// Найдите индекс Jin
// Замените джин на объект "Tequila"

// Задание 2
// Сделайте все напитки в массиве крепче на 1 градус

const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
drinks.splice(indexOfJin, 1, { name: "Tequila", strength: 40, price: 10 });

drinks.forEach((drink) => (drink.strength += 1));
console.log(drinks);

const beerPrice = drinks.reduce((acc, drink) => {
  if (drink.name === "Beer") {
    return acc + drink.price;
  }
  return acc;
}, 0);
console.log(beerPrice); // 8.5

// filter
// создает новый массив, в него войдут только элементы удовлетворяющие условию

const beers = drinks.filter((a) => a.name === "Beer");

console.log(beers);
// [
//     { name: 'Beer', strength: 8, price: 3.5 },
//     { name: 'Beer', strength: 8, price: 5 }
//   ]
