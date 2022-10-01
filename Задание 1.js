//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

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

// создаем функцию, которая выводят собственные свойства объекта
function presentPlayer(player) {
  for (let key in player) {
    if (player.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

presentPlayer(bolibok);
