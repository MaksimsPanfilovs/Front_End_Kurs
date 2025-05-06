// Задание 1
// Создайте метод, который принимает объект, а возвращает новый объект,
// в котором ключи и значения поменялись местами.
// {name: "Bob"} --> {"Bob": "name"}
// (вам понадобится поработать с Object.values, Object.keys )

const person = {
    name: "Bob",
  };
  
  function swapKeyValue(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const newObj = {};
  
    for (let i = 0; i < keys.length; i++) {
      newObj[values[i]] = keys[i];
    }
    return newObj;
  }
  
  console.log(person);
  console.log(swapKeyValue(person));
  
  // const user = {name: "Vlad", job: "plumber", vocation: "plumber"};
  // user["Vlad"] = "name";
  // user["plumber"] = "job";
  // user["plumber"] = "vocation";
  
  // Задание 2
  // Создайте объект дуб oak с полем высота height и полем год year и методом расти grow.
  // Пусть изначальная высота дуба будет 140 см, а год будет 2025.
  // При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.
  // Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.
  
  const oak = {
    height: 140,
    year: 2025,
    grow() {
      this.height += 30;
      this.year++;
    },
  };
  
  for (let i = 1; i <= 20; i++) {
    oak.grow();
    console.log(oak);
  }
  
  
  
  // Задание 3 дополнительное!
  // Попробуйте сохранить метод grow во внешнем от объекта контексте
  // и вызвать его с другими растениями при помощи bind или apply.
  
  // const { grow } = oak; // вытаскиваем метод из объекта
  function grow() {
    this.year++;
    this.height += 30;
  }
  // const grow = () => {
      // this.year++;
      // this.height += 30; 
  // };
  
  const sycamore = {
    height: 300,
    year: 2001,
  };
  
  // apply
  grow.apply(sycamore);
  console.log(sycamore);
  
  // bind
  const growSycamore = grow.bind(sycamore);
  growSycamore();
  growSycamore();
  growSycamore();
  console.log(sycamore);
  
  // da
  
  
  
  
  
  
  