function sum(a, b = 14) {
  return a + b;
}

sum(10, 12);

console.log(sum(2));

// напишите функцию, которая принимает фамилию и возвращает приветствие

// например
// Smith    --> "Hi, Smith! How are you?"

// если не указана фамилия, нужно использовать "Dowson"

// подумайте - чтобы она работала так же, без использования значения по умолчанию
// и с использованием тернарного оператора

function greet(familyName = "Dowson") {
  return `Hi, ${familyName}! How are you?`;
}

console.log(greet("Smith"));

function greetVer2(familyName) {
  return `Hi, ${familyName ? familyName : "Dowson"}! How are you?`;
}

console.log(greetVer2());
