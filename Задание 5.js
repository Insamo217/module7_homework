// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Использовать классы
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

// создаем родительский класс
class Room {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.connect = false;
  }
}

// создаем методы родительского класса
Room.prototype.connected = function () {
  console.log(`${this.name} connected to the network`);
  this.connect = true;
};
Room.prototype.unconnected = function () {
  console.log(`${this.name} offline`);
  this.connect = false;
};

// создаем первый дочерний конструктор класса Room
class Lamp extends Room {
  constructor(name, brand, power, bulbType, connect) {
    super(name, power, connect);
    this.brand = brand;
    this.bulbType = bulbType;
  }
}

// создаем конструктор дочернего объекта
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// создаем метод дочернего класса в зависимости от родительского метода
tableLamp.status = function () {
  if (this.connect) {
    console.log(`${this.name} ready to turn on the light`);
    this.turn = true;
  } else {
    console.log(`${this.name} turn off the lights`);
    this.turn = false;
  }
};

// проверяем

tableLamp.connected();
tableLamp.status();
console.log(tableLamp);

//создаем второй дочерний класс

class TV extends Room {
  constructor(name, brand, power, diameter, connect) {
    super(name, power, connect);
    this.brand = brand;
    this.diameter = diameter;
  }
}

// создаем конструктор дочернего объекта
const television = new TV("Television", "Samsung", 200, 80);

television.status = function () {
  if (this.connect) {
    console.log(`${this.name} ready for work`);
    this.turn = true;
  } else {
    console.log(`${this.name} not working`);
    this.turn = false;
  }
};

television.status();
console.log(television); 
