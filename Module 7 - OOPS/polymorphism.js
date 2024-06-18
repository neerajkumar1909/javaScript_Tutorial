/*  =========================================================================
// calling class only with a method

class Animal {

    sound() {
        console.log("Animal make different sounds")
    }
}

let Animal1 = new Animal();

Animal1.sound()   // output : Animal make different sounds
*/


//  POLYMORPHISM  ========================================================================
class Animal {

    sound() {
        console.log("Animal make different sounds")
    }
}

class Dog {

    sound() {
        console.log("Dog barks")
    }
}

class Cat {

    sound() {
        console.log("Cat Mews")
    }
}

let Animal1 = new Animal();

let tiger = new Dog();

let billu = new Cat()

tiger.sound()  // output : Dog barks

billu.sound()  // output : Cat Mews

Animal1.sound()   // output :Animal make different sounds
