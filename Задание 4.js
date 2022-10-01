// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
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

// создаем прототип
const Room = function (name, power) {
  this.name = name;
  this.power = power;
  this.connect = false;
};

// создаем методы прототипа
Room.prototype.connected = function () {
    console.log(`${this.name} connected to the network`);
    this.connect = true;
};

Room.prototype.unconnected = function () {
    console.log(`${this.name} offline`);
    this.connect = false;
};

// создаем функцию, прототипом к которой нужно сделать Room
function Lamp(name, brand, power, bulbType) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.bulbType = bulbType;
}

// создаем делегирующую связь с Room
Lamp.prototype = new Room();

// создаем конструктор
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
tableLamp.connected();
tableLamp.status();
console.log(tableLamp)

// создаем функцию, прототипом к которой сделать Room
function TV(name, brand, power, diameter) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.diameter = diameter;
}

// создаем делегирующую связь с Room
TV.prototype = new Room();

// создаем конструктор
const television = new TV("Television", "Samsung", 200, 80);

// создаем метод дочернего класса в зависимости от родительского метода
television.status = function () {
  if (this.connect) {
    console.log(`${this.name} ready for work`);
    this.turn = true;
  } else {
    console.log(`${this.name} not working`);
    this.turn = false;
  }
};
television.connected();
television.status();
console.log(television); 
