const form = document.getElementById("student-form");
const emailInput = form.elements["email"];
const germanInput = form.elements["german"];
const studentsContainer = document.getElementById("students-container");
const removeBtn = document.getElementById("remove-all-students");
const sortBtn = document.getElementById("sort-students-btn");
const emailError = document.getElementById("email-error");
const filterForm = document.getElementById("sort-form");
const filterParamInput = filterForm.elements["german"];

let students = [
  { email: "default@gmail.com", german: "B1" },
  { email: "default2@gmail.com", german: "B2" },
];

// эта функция при вызове меняет отображаемые на странице данные
function renderStudents(students) {
  console.log(studentsContainer.firstChild);
  // очищаем предыдущий рендер
  while (studentsContainer.firstChild) {
    studentsContainer.removeChild(studentsContainer.firstChild);
  }
  // заново наполняем родителя карточками
  students.forEach((student) => {
    const studentCard = document.createElement("div");

    // studentCard.innerText = student.email;
    // const emailInfo = document.createElement("span");
    // const germanInfo = document.createElement("span");
    // const delimiter = document.createTextNode(",     ");
    // emailInfo.innerText = student.email;
    // germanInfo.innerText = student.german;
    studentCard.innerHTML = `<span>${student.email}</span>, <span>${student.german}</span>`;
    // studentCard.append(emailInfo, delimiter, germanInfo);
    studentsContainer.appendChild(studentCard);
  });
}

renderStudents(students); // initial render

// добавляет нового студента в список и обновляет отображение
function addStudentToList(event) {
  event.preventDefault();
  // console.log("submit");
  console.log(emailInput.value);
  if (validateForm()) {
    students.push({ email: emailInput.value, german: germanInput.value });
    console.log(students);
    emailInput.value = "";
    emailError.innerText = "";
  } else {
    emailError.innerText = "Email is not valid, please add @";
  }
  renderStudents(students);
}

function validateForm() {
  return emailInput.value.includes("@") && !emailInput.value.includes("#");
}

// удаляет из списка и обновляет отображение
function removeAll() {
  console.log("remove");
  students = [];
  renderStudents(students);
}

// сортирует студентов
function sortStudentsByGerman() {
  students.sort((studentA, studentB) =>
    studentA.german.localeCompare(studentB.german)
  );
  renderStudents(students);
}

function filterStudents(event) {
  event.preventDefault();
  const filtered = students.filter((student) => student.german === filterParamInput.value);

  renderStudents(filtered);
}

form.addEventListener("submit", addStudentToList);
removeBtn.addEventListener("click", removeAll);
sortBtn.addEventListener("click", sortStudentsByGerman);
filterForm.addEventListener("submit", filterStudents);
