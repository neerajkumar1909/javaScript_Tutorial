// Encapsulation : In JavaScript, encapsulation is achieved through various techniques to restrict access to certain parts of an object, typically its data properties, and to protect the integrity of the object's state.

/*
// Without encapsulation  =======================================
function Animal(_name, _age) {
    this.name = _name
    this.age = _age
}

let Animal1 = new Animal("German Sepherd", 7)

Animal1.name = "Bull Dog"

console.log(Animal1)   // output : Animal { name: 'Bull Dog', age: 7 }
*/


/* 
// With Encapsulation  (by using function )  ==========================================

function Person(_name, _age) {
    let name = _name      //  using let variable instead of this.name ( so that we cannot access or change the name from outside the function)
    this.age = _age

    this.getName = function () {
        return name
    }
}

let Person1 = new Person("Neeraj", 24)

console.log(Person1.getName())  // output : Neeraj
*/



// Encapsulation with Class

class School {
    constructor(_rooms, _labs) {
        let rooms = _rooms   // using let instead of this keyword to restrict access to certain parts of an object
        let labs = _labs

        this.getDetails = function () {
            return (`Our school has ${rooms} rooms and ${labs}`)
        }
    }
}

let Schools = new School(23, 49)

console.log(Schools.rooms)  // output : undefined
console.log(Schools.getDetails())  // output :  Our school has 23 rooms and 49
