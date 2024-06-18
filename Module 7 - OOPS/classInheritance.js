// Classical Inheritance : Methods and properties from the Base class can be put down and can be passed to the derived class 



class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    // Method Inheritance
    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person {
    constructor(_name, _age, _classStrength) {
        super(_name, _age)
        this.classStrength = _classStrength;
    }

    test() {
        super.welcome()      // using method inheritance here, output :  Welcome Rahul
    }
}

class Student extends Person {
    constructor(_name, _age, _cgpa) {
        super(_name, _age)
        this.cgpa = _cgpa;
    }
}

let Person1 = new Person("Neeraj", 24)

let Teacher1 = new Teacher("Rahul", 23, 1)
Teacher1.test()    // calling this function to perform the method inheritance here 


let Student1 = new Student("Harkesg", 25, 8)

// console.log(Person1)  // object

// console.log(Teacher1)  // object

// console.log(Student1.cgpa)  // output : 8