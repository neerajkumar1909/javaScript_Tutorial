/*
function Person(_name, _age) {
    this.name = _name
    this.age = _age

    this.getNameAndAge = function () {
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}

let person1 = new Person("Rahul", 23)
let person2 = new Person("Harkesh", 25)

// person1.getNameAndAge()
// person2.getNameAndAge()

console.log(person1)
console.log(person2)

// Here we obliged DRY rule in console i.e(Do Not Repeat Yourself Rule)

*/


// So way 2 with prototype ======================================================
function Person(_name, _age) {
    this.name = _name
    this.age = _age
}

Person.prototype.getNameAndAge = function () {
    console.log(`I am ${this.name} and I am ${this.age} years old`)
}

let person1 = new Person("Neeraj", 24)
let person2 = new Person("Harkesh", 25)

console.log(person1)   // ouput :  inside the object we do not have that function but inside the prototype object we have that function (here we not violent DRY rule because we are not repeating here, we have just incooperated object method inside prototype)
person1.getNameAndAge();

console.log(person2)
person2.getNameAndAge();

// 