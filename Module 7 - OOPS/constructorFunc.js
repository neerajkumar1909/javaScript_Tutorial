// Constructor is used as a template

function createCars(_name, _company, _color) {
    this.name = _name
    this.company = _company
    this.color = _color

    this.drive = function () {
        console.log(`I am driving a ${this.name} and it is of ${this.color}`)
    }
}

let car1 = new createCars("X4", "BMW", "Red");

let car2 = new createCars("s-Class", "Mercedes", "White");

console.log(car1.name)  // X4

car1.drive();  // I am driving a X4 and it is of Red