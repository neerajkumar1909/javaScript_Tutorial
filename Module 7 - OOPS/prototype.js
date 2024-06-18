let myObj = {}
console.log(myObj)


let person1 = {
    name: "Neeraj",
    age: 24
}
console.log(person1)  // object
console.log(person1.hasOwnProperty('name')) // output : true
console.log(person1.hasOwnProperty('course')) // output : false


// constructor function ===============================================

function Person(_name, _age) {
    this.name = _name
    this.age = _age
}

let person2 = new Person("Rahul", 23)
console.log(person2)