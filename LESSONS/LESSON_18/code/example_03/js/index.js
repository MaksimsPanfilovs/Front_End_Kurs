// HTTP
// status

// method - метод
// GET - получение информации
// POST - создать какой-то ресурс
// DELETE - удалить ресурс

// Структура запроса:
// - url :
// https://www.amazon.de/new-releases/?ref_=nav_cs_newreleases
// протокол соединения                      https
// домен                                    www.amazon.de
// путь path                                /new-releases
// параметры запроса query params           ?ref_=nav_cs_newreleases

// - body - тело запроса, полезная нагрузка
// - headers
// - method

// по умолчанию фетч делает GET запрос
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products[0]);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProducts();

function fetchProductById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProductById(2);

// POST - используется для создания ресурса на бэкенде, часто для логина или регистрации
// попробуем сделать запрос на логин

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  body: JSON.stringify({ username: "emilys", password: "emilyspass" }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
