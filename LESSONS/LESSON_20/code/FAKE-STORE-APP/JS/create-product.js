const form = document.getElementById("add-product-form");

function addProductHandler(event) {
  event.preventDefault();
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;
  const price = form.elements["price"].value;
  const image = form.elements["image"].value;

  const newProduct = {
    title,
    description,
    price,
    image: [image],
    categoryId: 1,
  };

  fetchAddProduct(newProduct);

}

async function fetchAddProduct(product) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  });

  // 201 === успешное создание 
  if (res.status === 201) {
    // alert("Product is successfully added");
    window.location.replace("/");
  }
}

form.addEventListener("submit", addProductHandler);


//----------------------НАДО ЗАПОМНИТЬ-----------------------

// синтаксис html теги атрибуты - запомнить основные
// методы массивов - map, forEach, filter... 
// деструктуризация объектов
// синтаксис для работы с объектами
// fetch, async, основные методы http