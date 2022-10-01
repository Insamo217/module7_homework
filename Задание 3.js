//Написать функцию, которая создает пустой объект, но без прототипа.

// создаёт пустой объект без прототипа 123

const player = {
  team: "Dynamo Moscow",
  role: "main",
};

function nullObj(obj) {
  obj = Object.create(null);
  console.log(obj)
}

console.log(nullObj(player))
