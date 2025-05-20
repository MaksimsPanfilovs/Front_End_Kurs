// JSON
// JavaScript object notation

const user = {
    name: "John",
    email: "john@gmail.com",
    age: 18,
};

// основной формат передачи и хранения информации - это JSON

const userAsJsonString = JSON.stringify(user);
console.log(userAsJsonString);  // {"name":"John","email":"john@gmail.com","age":18}

const userFromJson = JSON.parse(userAsJsonString);
console.log(userFromJson);  // { name: 'John', email: 'john@gmail.com', age: 18 }
