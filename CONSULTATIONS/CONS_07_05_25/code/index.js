// Мы можем создать элементы с нуля и прикреплять их к документу Html
// Создаем пустой элемент p

const newElement = document.createElement("p");
newElement.textContent = "Я БЫЛ СОЗДАН ПРИ ПОМОЩИ JS";
newElement.style.border = "2px solid red";
document.body.append(newElement);

const targetElement = document.getElementById("target-element");
const newBtn = document.createElement("button");
newBtn.type = "button";
newBtn.textContent = "Нажми на меня";
targetElement.append(newBtn);
