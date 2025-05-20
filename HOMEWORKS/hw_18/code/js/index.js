const title = document.getElementById("title");
const ageElem = document.getElementById("age");
const foodsContainer = document.getElementById("foods-container");
const drinksContainer = document.getElementById("drinks-container");
 
fetch("https://maksimspanfilovs.github.io/fake-pirate/boris.json")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Fetch Boris Error");
  })
  .then((obj) => {
    console.log(obj);

    const {firstName, secondName, favFoods, favDrinks, age} = obj;
    title.innerText = firstName + " " + secondName;
    ageElem.innerText = "Age: " + age;

    favFoods.forEach((food) => {
        const foodLi = document.createElement("li");
        foodLi.innerText = food;
        foodsContainer.appendChild(foodLi); 
    });



  })
  .catch((err) => {
    console.error(err);
  });

