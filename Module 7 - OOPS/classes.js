class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    // Method inside the class
    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

let Person1 = new Person("Neeraj", 24)

let Person2 = new Person("Rahul", 23)

let Person3 = new Person("Harkesh", 25)

console.log(Person1)  // Person { name: 'Neeraj', age: 24 }

Person1.welcome()   // Welcome Neeraj


