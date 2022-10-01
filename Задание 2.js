//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

//создаем прототип
const player = {
  team: "Dynamo Moscow",
  role: "main",
};

// создаем объект с выбранным прототипом
const bolibok = Object.create(player);

// добавляем собственные свойства объекту bolibok
bolibok.position = "midfielder";
bolibok.year = 1992;
bolibok.weight = "70kg";

// создаем функцию, которая проверяет есть ли у переданного объекта свойство с данным именем
function isStringInObj(str, obj) {
  if (obj.hasOwnProperty(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(isStringInObj("position", bolibok));
