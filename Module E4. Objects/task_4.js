// Родительская функция с методами
function Device(power) {
  this.power = power;
  this.enabled = false;
}

Device.prototype.enable = function() {
  this.enabled = true;
};

Device.prototype.disable = function() {
  this.enabled = false;
};

// Делегирующая связь [[Prototype]] для двух конкретных приборов
function Lamp(power, color) {
  Device.call(this, power);
  this.color = color;
}

Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;

function Computer(power, ram) {
  Device.call(this, power);
  this.ram = ram;
}

Computer.prototype = Object.create(Device.prototype);
Computer.prototype.constructor = Computer;

// Собственные свойства и методы
Lamp.prototype.setColor = function(color) {
  this.color = color;
};

Computer.prototype.getRam = function() {
  return this.ram;
};

// Создание экземпляров
const lamp = new Lamp(100, 'white');
const computer = new Computer(200, 8);

// Включение приборов в розетку
lamp.enable();
computer.enable();

// Посчитать потребляемую мощность
console.log(`Total power: ${lamp.power + computer.power}`); // Total power: 300