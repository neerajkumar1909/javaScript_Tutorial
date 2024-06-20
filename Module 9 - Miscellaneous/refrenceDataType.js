// Reference Data Types are : string, numbers, boolean, null, undefined
// They are Mutable
// They are stored in a Heap Memory...


let firstPerson = {
    name: "Neeraj",
    age: 24
}

let secondPerson = firstPerson;

firstPerson.name = "Rahul"

console.log("First Person :", firstPerson)
console.log("Second Person :", secondPerson) 