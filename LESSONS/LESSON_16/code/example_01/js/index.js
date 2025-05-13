const form = document.getElementById("personal-data-form");
const heightInput = form.elements["height"];
const genderInput = form.elements["gender"];
const errMessageElement = document.getElementById("error-message");
const resultCard = document.getElementById("result-card");

function onSubmit(e) {
  e.preventDefault();
  // console.log(heightInput.value, genderInput.value);
  if (validate()) {
    const idealWeight = getIdealWeightByHeightForGender(
      Number(heightInput.value),
      genderInput.value
    );
    resultCard.innerText = "Ваш идеальный вес:  " + idealWeight;
  }
}

function validate() {
  let errMessage = "";
  let result = true;
  if (!Number(heightInput.value)) {
    errMessage += "Invalid weight, please use numbers. ";
    result = false;
  }
  if (!Number(heightInput.value)) {
    errMessage += "Sorry, but our program doesn't work with height > 210cm ";
    result = false;
  }
  if (!genderInput.value) {
    errMessage += "Please choose gender!";
    result = false;
  }
  errMessageElement.innerText = errMessage;
  return result;
}

function getIdealWeightByHeightForGender(height, gender) {
  if (gender === "male") {
    return height - 100;
  }
  return height - 110;
}

form.addEventListener("submit", onSubmit);
