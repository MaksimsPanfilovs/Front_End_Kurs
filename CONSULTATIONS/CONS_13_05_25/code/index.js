// Сначала мы получаем ссылки на несколько элементов HTML с помощью метода getElementById:
// formElement - это форма с идентификатором "form".
// listElement - это список (вероятно, <ul>) с идентификатором "persons-list".
// clearBtnElement - это кнопка с идентификатором "clear".
// clearOneBtnElement - это кнопка с идентификатором "clear-one".

const formElement = document.getElementById("form");
const listElement = document.getElementById("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearBtnOneElement = document.getElementById("clear-one");

// Создается пустой массив persons, в котором будут храниться данные
// о людях, которые будут добавляться через форму.

const persons = [];

const clearList = function () {
  while (listElement.hasChildNodes()) {
    // пока есть дети лист элемент
    listElement.firstChild.remove(); // удаляю первого ребенка и иду на следующую итерацию
  }
};

// clearOne удаляет первый элемент из списка listElement.
// Этот фрагмент кода определяет функцию с именем ClearOne в JavaScript.
// Функция проверяет, имеет ли элемент DOM с идентификатором ListElement какие-либо дочерние узлы.
// Если это произойдет, первый дочерний узел будет удален из элемента.

const clearOne = function () {
  if (listElement.hasChildNodes) {
    listElement.firstChild.remove();
  }
};

// Функция clearInputs(event) используется для очистки полей ввода формы
// Она получает объект события event и обнуляет значения полей формы "nickname" и "place".
function clearInputs(event) {
  event.target.nickname.value = "";
  event.target.place.value = "";
}

// Функция changeStatus(event) изменяет стиль элемента списка при клике на него.
//  Если у элемента уже есть стиль "textDecoration" с значением "line-through",
// то этот стиль убирается, иначе он добавляется, что создает эффект зачеркивания текста.
function changeStatus(event) {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
}

// Добавляются слушатели событий на кнопки:
// clearBtnElement - при клике на кнопку "clear" вызывается функция clearList.
// clearOneBtnElement - при клике на кнопку "clear-one" вызывается функция clearOne.
clearBtnElement.addEventListener("click", clearList);
clearBtnOneElement.addEventListener("click", clearOne);

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // предотвращает переход на другую страницу

  const person = {
    name: event.target.nickname.value,
    place: event.target.place.value,
  };
  // Данные из формы извлекаются и сохраняются в объект person.
  //  Этот объект имеет два свойства: "name" и "place",
  // которые содержат данные из соответствующих полей формы.

  persons.push(person);
  // Объект person добавляется в массив persons.
  const liElement = document.createElement("li"); // создали <li></li>
  liElement.textContent = `🥷🏻 ${person.name} ${person.place} 🥷🏻`;
  liElement.onclick = changeStatus;
  // устанавливается обработчик клика onclick,
  // который вызывает функцию changeStatus для изменения стиля элемента при клике.

  listElement.append(liElement);  // прикрепить новый элемент к списку
  clearInputs(event);

});
