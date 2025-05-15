// Promise

// fulfilled - удовлетворен - с результатом
// rejected - отклонено - забыли принести еду
// pending - ожидание

// сначала pending - а потом по обстоятельствам - либо fulfilled, если все ok
// либо rejected - если возникла ошибка или проблема

// Асинхронные функции - возвращают промис

// Создадим промис, который возвращает нам бургер

const burgerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tasty burger");
  }, 3000);
});

console.log(burgerPromise); // Promise { <pending> }

// подождать значение === раскрыть промис
// метод then - подождет пока появится значение -
burgerPromise.then((burger) => {
  console.log("Внутри колбека: " + burger);
});

console.log("Вне колбека бургер : ", burgerPromise);

// Reject
const badPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("The kitchen is on fire"));
  }, 3000);
});

badPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err.message);
  });

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Here is your 3D printer
// Error: "You didn't behave this year!"
const printerPresent = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (getRandomNumber(2)) {
      resolve("Here is your 3D printer");
    }
    reject(new Error("You didn't behave this year!"));
  }, 2000);
});

printerPresent
  .then((present) => {
    console.log(present);
  })
  .catch((err) => {
    console.log(err.message);
  });
