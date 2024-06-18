
// Question : 2
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');
console.log(lydia); // output: Person { firstName: 'Lydia', lastName: 'Hallie' }
console.log(sarah); // output : undefined





// Question : 5
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());  // 20
console.log(shape.perimeter()); // NaN