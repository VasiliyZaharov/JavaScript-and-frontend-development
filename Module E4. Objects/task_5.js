// Первое задание

class Printer {
  printObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
}


// Второе задание

class PropertyChecker {
  check(str, obj) {
    return obj.hasOwnProperty(str);
  }
}


// Третье задание

class ObjectCreator {
  createEmpty() {
    return Object.create(null);
  }
}


// Четвертое задание

class Device {
  constructor(power) {
    this.power = power;
    this.enabled = false;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }
}

class Lamp extends Device {
  constructor(power, color) {
    super(power);
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Computer extends Device {
  constructor(power, ram) {
    super(power);
    this.ram = ram;
  }

  getRam() {
    return this.ram;
  }
}

// Создание экземпляров
const lamp = new Lamp(100, 'white');
const computer = new Computer(200, 8);

// Включение приборов в розетку
lamp.enable();
computer.enable();

// Посчитать потребляемую мощность
console.log(`Total power: ${lamp.power + computer.power}`); // Total power: 300
